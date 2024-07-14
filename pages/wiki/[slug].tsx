import Head from "next/head"
import Section from "@/components/section"
import { GetStaticPropsResult, GetStaticPathsResult, GetStaticPropsContext } from "next"
import { ParsedUrlQuery } from "querystring"
import { remark } from "remark"
import remarkHtml from "remark-html"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import remarkParse from "remark-parse"
import { Element, ElementContent } from "hast"

interface Item {
  title: string
  slug: string
  children: Item[]
}

interface ItemWithFile {
  title: string
  slug: string
  children: ItemWithFile[]
  path: string
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
  function printItem(i: Item) {
    return (
      <li><a href={i.slug}>{i.title}</a> {printChildren(i)}</li>
    )
  }
  function printChildren(i: Item) {
    if (i.children.length == 0) { return (<></>) }
    return (
      <>
        <ul>
          {i.children.map(printItem)}
        </ul>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{item.title} | celestia</title>
      </Head>

      <Section id="nav">
        {printChildren(root)}
      </Section>

      <Section id="content">
        <h1>{item.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Section>
    </>
  )
}

/**
 * Lists the slugs of all available wiki pages.
 */
export function getStaticPaths(): GetStaticPathsResult<Params> {
  const items = flatten(getRoot())
  return {
    paths: items.map(i => ({ params: { slug: i.slug } })),
    fallback: false
  }
}

/**
 * Return details for a wiki page with the specified slug.
 */
export function getStaticProps({ params }: GetStaticPropsContext<Params>): GetStaticPropsResult<Props> {
  const root = getRoot()
  const allItems = flatten(root)
  const item = allItems.find(i => i.slug === params!.slug)
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
              href: translateURL(node.url, item.path, allItems),
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
  return getDirectoryItem(p, "index")
}

/**
 * Walk through a subdirectory in the /wiki directory, expecting an index.md file and possibly more children.
 */
function getDirectoryItem(p: string, name: string): ItemWithFile {
  const items: Record<string, ItemWithFile> = {}
  for (const fileName of fs.readdirSync(p)) {
    const childPath = path.join(p, fileName)
    const stat = fs.statSync(childPath)
    if (stat.isDirectory()) {
      items[fileName] = getDirectoryItem(childPath, fileName)
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
        path: childPath,
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
  index.slug = name;
  delete items["index"]

  const children = Object.values(items).sort((x, y) => x.title.localeCompare(y.title))
  index.children.push(...children)
  return index
}

function flatten(item: ItemWithFile): ItemWithFile[] {
  const items = item.children?.flatMap(flatten)
  items.push(item)
  return items
}

/**
 * You always gotta separate the file from the item or sth like that.
 */
function removeFile(item: ItemWithFile): Item {
  return {
    title: item.title,
    slug: item.slug,
    children: item.children.map(removeFile),
  }
}

function translateURL(url: string, itemPath: string, items: ItemWithFile[]): string {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url
  }

  const p = path.normalize(path.join(path.dirname(itemPath), url))
  const item = items.find(i => i.path == p)
  if (!item) {
    throw "unresolved url: " + p
  }

  return item.slug
}
