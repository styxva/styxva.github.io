type Props = {
  title?: string,
  music?: string,
  href?: string,
}

export default function VideoContainer({ title, music, href }: Props) {

  let path = "/thumbnails/" + title + ".png"

  return (
    <div>
      <img src={path} />
      <p>{title}</p>
      <p>Music: {music}</p>
      <a href={href}>Download Link</a>
    </div>
  )

}

