import Head from "next/head"
import { InstagramLogo, YoutubeLogo, TwitterLogo, DiscordLogo, TwitchLogo, ArrowDown, Heart, Envelope } from "@phosphor-icons/react/dist/ssr"
import Section from "@/components/section"
import Footer from "@/components/footer"
import Button from "@/components/button"
import CopyableText from "@/components/copyable-text"
import ProfilePicture from "@/components/profile-picture"
import styles from "./index.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>styx</title>
      </Head>

      <Section id="landing-page" isCentered>
        <div className={styles.landingPage}>
          <ProfilePicture size={170} border={5} inset={3} />

          <div className={styles.intro}>
            <h1>Hi, I'm styx!</h1>

            <p>I am a 23 y.o. voice artist from Celestia. I mainly do voice overs (VOs) in Japanese on my Instagram page, and stream live VO sessions and other fun stuff on my Twitch channel on Tuesdays and Fridays.</p>

            <div className={styles.cta}>
              <ul className={styles.social}>
                <Button href="https://twitch.tv/styx_va" compact newTab><TwitchLogo /></Button>
                <Button href="https://youtube.com/@styx_va" compact newTab><YoutubeLogo /></Button>
                <Button href="https://twitter.com/styx_va" compact newTab><TwitterLogo /></Button>
                <Button href="https://instagram.com/styx_va" compact newTab><InstagramLogo /></Button>
                <Button href="https://discord.gg/J69Nx4P8e4" compact newTab><DiscordLogo /></Button>
              </ul>

              <ul className={styles.buttons}>
                <Button href="https://ko-fi.com/styx_va" newTab><Heart /> Donate</Button>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  )
}
