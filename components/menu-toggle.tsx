import { ReactNode } from "react"
import styles from "./menu-toggle.module.css"

type Props = {
  id: string,
  menuClass: string,
  children: ReactNode,
}

export default function MenuToggle({ id, menuClass, children }: Props) {
  return (
    <>
      <input type="checkbox" id={id} className={styles.check} />

      <label htmlFor={id} className={styles.label}>
        <span className={styles.icon} />
      </label>

      <div className={`${styles.menu} ${menuClass}`}>
        {children}
      </div>
    </>
  )
}
