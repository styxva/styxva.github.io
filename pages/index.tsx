import Head from "next/head"
import { InstagramLogo, YoutubeLogo, TwitterLogo, ThreadsLogo, TiktokLogo, ArrowDown, Envelope } from "@phosphor-icons/react/dist/ssr"
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Section id="landing-page">
        <div className={styles.landingPage}>
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
      </Section>

      <Section id="commissions">
        <h1>Open for Commissions</h1>

        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>

        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

        <div className={styles.contact}>
          <div className={styles.buttons}>
            <Button href="mailto:commissions@styx-va.com"><Envelope /> Contact</Button>
            <CopyableText content="commissions@styx-va.com" />
          </div>

          <span>By sending an email to the above address you acknowledge and agree to the <a href="/terms-of-service">Terms of Service</a>.</span>
        </div>
      </Section>

      <Footer />
    </>
  )
}
