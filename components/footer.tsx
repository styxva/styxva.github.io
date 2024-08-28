import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.bg}>
      <div className={styles.container}>
        <span className={styles.copyright}>&copy; styx 2024</span>

        <ul className={styles.nav}>
          <li><a href="/terms-of-service">Terms of Service</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  )
}
