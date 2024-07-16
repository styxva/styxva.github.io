import { ReactNode } from "react"
import styles from "./section.module.css"

type Props = {
  children: ReactNode,
  id: string,
  isCentered?: boolean,
}

export default function Section({ children, id, isCentered }: Props) {
  return (
    <section className={`${styles.bg} ${isCentered ? styles.centered : ''}`} id={id}>
      <div className={styles.container}>
        <div className={styles.inner}>
          {children}
        </div>
      </div>
    </section>
  )
}

