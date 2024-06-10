import { ReactNode } from "react"
import styles from "./section.module.css"

type Props = {
  children: ReactNode,
}

export default function Section({ children }: Props) {
  return (
    <section className={styles.bg}>
      <div className={styles.container}>
        {children}
      </div>
    </section>
  )
}
