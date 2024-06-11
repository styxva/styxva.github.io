import ProfilePicture from "@/components/profile-picture"
import styles from "./home-link.module.css"

export default function HomeLink() {
  return (
    <a href="/" className={styles.link}>
      <ProfilePicture size={32} border={3} inset={2} />
      styx
    </a>
  )
}
