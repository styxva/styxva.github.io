import styles from "@/components/video-download-container.module.css"
import Button from "@/components/button"

type Props = {
  title?: string,
  music?: string,
  href?: string,
  author?: string,
}

export default function VideoContainer({ title, music, href, author }: Props) {

  let path = "/thumbnails/" + title + ".png"
  let classNames = [styles.video]
  let classNamesInner = [styles.innerstuff]
  let classNameBottom = [styles.bottom]

  return (
    <div className={classNames.join(' ')}>
      <div>
        <img src={path} />
      </div>
      <div className={classNamesInner.join(' ')}>
        <p><strong>{title}</strong></p>
        <p>Music: {music}</p>
        <p>Author: {author}</p>
      </div>
      <div className={classNameBottom.join(' ')}>
        <Button href={href} compact>Download</Button>
      </div>
    </div>
  )
}

