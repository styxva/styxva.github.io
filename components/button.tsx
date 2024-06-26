import { MouseEventHandler, ReactNode } from "react"
import styles from "@/components/button.module.css"

type Props = {
  compact?: boolean,
  inverted?: boolean,
  href?: string,
  newTab?: boolean,
  onClick?: MouseEventHandler,
  children: ReactNode,
}

export default function Button({ compact, inverted, href, newTab, children, onClick }: Props) {
  let classNames = [styles.button]
  if (compact) { classNames.push(styles.compact) }
  if (inverted) { classNames.push(styles.inverted) }
  else { classNames.push('fgComplementary') }

  return (
    <a
      href={href || '#!'}
      target={newTab ? '_blank' : undefined}
      onClick={onClick}
      className={classNames.join(' ')}
    >
      {children}
    </a>
  )
}
