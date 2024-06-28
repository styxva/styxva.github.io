import Head from "next/head"
import { InstagramLogo, YoutubeLogo, TwitterLogo, ThreadsLogo, TiktokLogo, ArrowDown, Heart, Envelope } from "@phosphor-icons/react/dist/ssr"
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

      <Section id="landing-page">
        <div className={styles.landingPage}>
          <ProfilePicture size={170} border={5} inset={3} />

          <div className={styles.intro}>
            <h1>Hi, I'm styx!</h1>

            <p>I am a 22 y.o. voice artist from Celestia. I mainly do voice overs (VOs) in Japanese on my Instagram page, and stream live VO sessions and other fun stuff on my YouTube channel on Saturdays. On this page, you will find all the information regarding commissions you need!</p>

            <div className={styles.cta}>
              <ul className={styles.social}>
                <Button href="https://instagram.com/styx___z" compact newTab><InstagramLogo /></Button>
                <Button href="https://youtube.com/@styyx_" compact newTab><YoutubeLogo /></Button>
                <Button href="https://twitter.com/styx___z" compact newTab><TwitterLogo /></Button>
                <Button href="https://threads.net/@styx___z" compact newTab><ThreadsLogo /></Button>
                <Button href="https://tiktok.com/@styx___z" compact newTab><TiktokLogo /></Button>
              </ul>

              <ul className={styles.buttons}>
                <Button href="https://ko-fi.com/styxva" newTab><Heart /> Donate</Button>
                <Button href="#commissions"><ArrowDown /> Commissions</Button>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section id="commissions">
        <h1>Open for Commissions</h1>

        <p>If you need an English, Japanese or German voice over, a short recorded message, or similar; I would be glad to help out! My specialty is monologues, but I am open to anything! You can find examples of my work on my Instagram page, and YouTube channel.</p>

        <p>If you decide to commission me, or send a request; please use the following "Contact" button. It will open your local mail client with a pre-written form, which you can fill out. In case you don't have one installed, or the button doesn't work for you, you can also directly copy the address by clicking the button on the right.</p>

        <div className={styles.contact}>
          <div className={styles.buttons}>
            <Button href="mailto:commissions@styx-va.com"><Envelope />Contact</Button>
            <CopyableText content="commissions@styx-va.com" />
          </div>

          <span>By sending an email to the above address you acknowledge and agree to my <a href="/conditions" target="_blank">Conditions</a> and <a href="/pricing" target="_blank">Pricing</a>.</span>
        </div>
      </Section>

      <Footer />
    </>
  )
}
