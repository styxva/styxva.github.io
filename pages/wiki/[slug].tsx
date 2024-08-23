import Head from "next/head"
import Footer from "@/components/footer"
import Section from "@/components/section"
import MenuToggle from "@/components/menu-toggle"
import { GetStaticPropsResult, GetStaticPathsResult, GetStaticPropsContext } from "next"
import { ParsedUrlQuery } from "querystring"
import { Element, ElementContent } from "hast"
import { CaretDown, CaretRight } from "@phosphor-icons/react/dist/ssr"
import { remark } from "remark"
import remarkHtml from "remark-html"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import remarkParse from "remark-parse"
import styles from "./wiki.module.css"

interface Item {
  title: string
  slug: string
  children: Item[]
  parents: string[]
}

interface ItemWithFile {
  title: string
  slug: string
  children: ItemWithFile[]
  filePath: string
  parents: string[]
  file: matter.GrayMatterFile<string>
}

interface Params extends ParsedUrlQuery {
  slug: string
}

interface Props {
  root: Item
  item: Item
  content: string
}

export default function Wiki({ root, item, content }: Props) {
  function printItem(i: Item, indentation: number) {
    const hasChildren = i.children.length > 0
    const expandChildren = hasChildren && (item.parents.indexOf(i.slug) != -1 || i.slug == item.slug)
    const isActive = item.slug == i.slug
    const paddingLeft = 24 * (indentation + 1) - 4
    return (
      <li key={i.slug}>
        <a href={i.slug} className={isActive ? styles.activeItem : ''} style={{paddingLeft}}>
          <span>{i.title}</span>
          {hasChildren
            ? (<div className={styles.disclosureIndicator}>{expandChildren ? <CaretDown /> : <CaretRight />}</div>)
            : null}
        </a>
        {expandChildren ? printChildren(i, indentation + 1) : null}
      </li>
    )
  }
  function printChildren(i: Item, indentation: number) {
    return (
      <ul>
        {i.children.map(c => printItem(c, indentation))}
      </ul>
    )
  }

  return (
    <>
      <Head>
        <title>{item.title + " | celestia"}</title>
        <meta name="theme-color" content="rgb(24, 17, 17)" />
      </Head>

      <div className={styles.sidebarContainer}>
        <nav>
          <header>
            <h1><a href="index">celestia</a></h1>
          </header>

          <MenuToggle id="menuToggle" menuClass={styles.menu}>
            {printChildren(root, 0)}
          </MenuToggle>
        </nav>

        <main>
          <Section id={content}>
            <header>
              <h1>{item.title}</h1>
            </header>

            <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
          </Section>

          <Footer />
        </main>
      </div>
    </>
  )
}

/**
 * Lists the slugs of all available wiki pages.
 */
export function getStaticPaths(): GetStaticPathsResult<Params> {
  const items = flatten(getRoot())
  return {
    paths: Object.values(items).map(i => ({ params: { slug: i.slug } })),
    fallback: false
  }
}

/**
 * Return details for a wiki page with the specified slug.
 */
export function getStaticProps({ params }: GetStaticPropsContext<Params>): GetStaticPropsResult<Props> {
  const root = getRoot()
  const allItems = flatten(root)
  const item = allItems[params!.slug]
  if (!item) {
    throw "i hate this fucking impure language so damn much"
  }

  const content = remark()
    .use(remarkParse)
    .use(remarkHtml, {
      handlers: {
        "link": (state, node, _): ElementContent => {
          const result: Element = {
            type: 'element',
            tagName: 'a',
            properties: {
              href: translateURL(node.url, item.filePath, allItems),
            },
            children: state.all(node)
          }

          if (node.title !== null && node.title !== undefined) {
            result.properties.title = node.title
          }

          state.patch(node, result)
          return state.applyData(node, result)
        }
      }
    })
    .processSync(item.file.content)
    .toString()
  return { props: { root: removeFile(root), item: removeFile(item), content } }
}

/**
 * Reads the /wiki directory and transforms it into a tree of items. The "slug" of the item is...
 * - ... the name of the markdown file for regular pages
 * - ... the name of the directory for "index.md" files
 * - ... "index" for the "index.md" file in the root directory.
 */
function getRoot(): ItemWithFile {
  const p = path.join(process.cwd(), "wiki")
  return getDirectoryItem(p, [])
}

/**
 * Walk through a subdirectory in the /wiki directory, expecting an index.md file and possibly more children.
 */
function getDirectoryItem(p: string, dirPath: string[]): ItemWithFile {
  const items: Record<string, ItemWithFile> = {}
  for (const fileName of fs.readdirSync(p)) {
    const childPath = path.join(p, fileName)
    const stat = fs.statSync(childPath)
    if (stat.isDirectory()) {
      items[fileName] = getDirectoryItem(childPath, [...dirPath, fileName])
    } else if (stat.isFile() && fileName.endsWith(".md")) {
      const slug = fileName.slice(0, -3)
      const fileContents = fs.readFileSync(childPath, "utf8")
      const file = matter(fileContents)
      const title = file.data["title"]
      if (!title) {
        throw "you stupid or what?"
      }
      items[slug] = {
        title,
        file,
        slug,
        parents: [...dirPath],
        filePath: childPath,
        children: [],
      }
    } else {
      throw "you stupid or what?"
    }
  }

  const index = items["index"]
  if (!index) {
    throw "yo, you dropped your index"
  }
  if (dirPath.length > 0) {
    index.slug = dirPath.at(-1)!
  }
  index.parents.pop()
  delete items["index"]

  const children = Object.values(items).sort((x, y) => x.title.localeCompare(y.title))
  index.children.push(...children)
  return index
}

function flatten(item: ItemWithFile): Record<string, ItemWithFile> {
  let result: Record<string, ItemWithFile> = {}
  result[item.slug] = item
  for (const child of item.children) {
    const children = flatten(child)
    const duplicateSlug = Object.keys(children).find(s => Object.hasOwn(result, s))
    if (duplicateSlug) {
      throw "duplicate slug: " + duplicateSlug
    }
    result = { ...result, ...children }
  }

  return result
}

/**
 * You always gotta separate the file from the item or sth like that.
 */
function removeFile(item: ItemWithFile): Item {
  return {
    title: item.title,
    slug: item.slug,
    parents: item.parents,
    children: item.children.map(removeFile),
  }
}

function translateURL(url: string, itemPath: string, items: Record<string, ItemWithFile>): string {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url
  }

  const p = path.normalize(path.join(path.dirname(itemPath), url))
  const item = Object.values(items).find(i => i.filePath == p)
  if (!item) {
    throw "unresolved url: " + p
  }

  return item.slug
}
