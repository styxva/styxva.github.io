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

            <p>I am a 22 y.o. voice artist from Celestia. I mainly do voice overs (VOs) in Japanese on my Instagram page, and stream live VO sessions and other fun stuff on my YouTube channel on Saturdays. On this page, you will find all the information regarding commissions you need!</p>

            <div className={styles.cta}>
              <ul className={styles.social}>
                <Button href="https://instagram.com/styx___z" compact newTab><InstagramLogo /></Button>
                <Button href="https://twitch.tv/styx_va" compact newTab><TwitchLogo /></Button>
                <Button href="https://youtube.com/@styxva" compact newTab><YoutubeLogo /></Button>
                <Button href="https://twitter.com/styxva" compact newTab><TwitterLogo /></Button>
                <Button href="" compact><DiscordLogo /></Button>
              </ul>

              <ul className={styles.buttons}>
                <Button href="https://ko-fi.com/styxva" newTab><Heart /> Donate</Button>
                <Button href="#commissions"><ArrowDown /> Commissions</Button>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section id="commissions" isCentered>
        <h1>Open for Commissions</h1>

        <p>If you need an English, Japanese or German voice over, a short recorded message, or similar; I would be glad to help out! My specialty is monologues, but I am open to anything! You can find examples of my work on my Instagram page, and YouTube channel.</p>

        <p>If you decide to commission me, or send a request; please use the following "Contact" button. It will open your local mail client with a pre-written form, which you can fill out. In case you don't have one installed, or the button doesn't work for you, you can also directly copy the address by clicking the button on the right.</p>

        <div className={styles.contact}>
          <div className={styles.buttons}>
            <Button href="mailto:commissions@styx-va.com?subject=Commission&body=Your%20Script:%0D%0A[Insert%20your%20script%20here.%20I%20only%20accept%20Japanese/English/German]%0D%0A%0D%0ADo%20you%20need%20a%20translation%3F%20Yes/No%0D%0A%0D%0AIf%20you%20do%20need%20a%20translation%3B%20choose%20a%20language%20I%20should%20translate%20it%20to%3A%0D%0AGerman/English/Japanese%0D%0A%0D%0ADo%20you%20need%20a%20video%3F%20Yes/No%0D%0A%0D%0ADo%20you%20have%20background%20music%20you%20want%20me%20to%20use%3F%20Yes/No/NA%0D%0A[If%20you%20do,%20please%20add%20it%20as%20an%20attachment]%0D%0A%0D%0ADo%20you%20have%20a%20background%20image%20you%20want%20me%20to%20use%3F%20Yes/No/NA%0D%0A[If%20you%20do,%20please%20add%20it%20as%20an%20attachment]"><Envelope />Contact</Button>
            <CopyableText content="commissions@styx-va.com" />
          </div>

          <span>By sending an email to the above address you acknowledge and agree to my <a href="/conditions" target="_blank">Conditions</a> and <a href="/pricing" target="_blank">Pricing</a>.</span>
        </div>
      </Section>

      <Footer />
    </>
  )
}
