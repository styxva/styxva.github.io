import { ReactNode } from "react"
import styles from "./section.module.css"

type Props = {
  children: ReactNode,
  id: string,
}

export default function Section({ children, id }: Props) {
  return (
    <section className={styles.bg} id={id}>
      <div className={styles.container}>
        <div className={styles.inner}>
          {children}
        </div>
      </div>
    </section>
  )
}

