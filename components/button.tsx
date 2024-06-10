import { ReactNode } from "react"
import styles from "./button.module.css"

type Props = {
  compact?: boolean,
  href: string,
  children: ReactNode,
}

export default function Button({ compact, href, children }: Props) {
  return (
    <a
      href={href}
      className={`${styles.button} ${compact ? styles.compact : ''} fgComplementary`}
    >
      {children}
    </a>
  )
}

