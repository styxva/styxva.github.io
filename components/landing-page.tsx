import { InstagramLogo, YoutubeLogo, TwitterLogo, ThreadsLogo, TiktokLogo, ArrowDown } from "@phosphor-icons/react/dist/ssr"
import ProfilePicture from "./profile-picture"
import Button from "./button"
import styles from "./landing-page.module.css"

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <ProfilePicture size={170} border={5} inset={3} />

      <div className={styles.intro}>
        <h1>Hi, I'm styx!</h1>

        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>

        <div className={styles.cta}>
          <ul className={styles.social}>
            <Button href="https://instagram.com/styx___z" compact><InstagramLogo /></Button>
            <Button href="https://youtube.com/@styyx_" compact><YoutubeLogo /></Button>
            <Button href="https://twitter.com/styx___z" compact><TwitterLogo /></Button>
            <Button href="https://threads.net/@styx___z" compact><ThreadsLogo /></Button>
            <Button href="https://tiktok.com/@styx___z" compact><TiktokLogo /></Button>
          </ul>

          <ul className={styles.buttons}>
            <Button href="#commissions"><ArrowDown /> Commissions</Button>
          </ul>
        </div>
      </div>
    </div>
  )
}

