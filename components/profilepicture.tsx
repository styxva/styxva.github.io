import styles from "./profilepicture.module.css"

type Props = {
  size: number,
  border: number,
  inset: number,
}

export default function ProfilePicture({ size, border, inset }: Props) {
  return (
    <div className={styles.outer} style={{ padding: border - 2 }}>
      <div className={styles.innerOutline}>
        <div className={styles.innerCutout} style={{ padding: inset }}>
          <img className={styles.image} src="/pfp.png" alt="Profile Picture" width={size} />
        </div>
      </div>
    </div>
  )
}
