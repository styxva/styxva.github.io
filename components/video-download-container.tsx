import styles from "@/components/video-download-container.module.css"
import Button from "@/components/button"

type Props = {
  title?: string,
  music?: string,
  href?: string,
}

export default function VideoContainer({ title, music, href }: Props) {

  let path = "/thumbnails/" + title + ".png"
  let classNames = [styles.video]

  return (
    <div className={classNames.join(' ')}>
      <img src={path} />
      <div>
        <p>{title}</p>
        <p>Music: {music}</p>
      </div>
      <Button href={href} compact>Download</Button>
    </div>
  )
}

