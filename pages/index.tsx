import Head from "next/head"
import ProfilePicture from "@/components/profilepicture"
import Section from "@/components/section"
import styles from "./index.module.css"
import commonStyles from "@/styles/common.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>styx</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Section>
        <ProfilePicture size={170} border={5} inset={3} />

        <h1>Hi, I'm styx!</h1>
      </Section>

      <Section>
        <h1>Open for Commissions</h1>
      </Section>
    </>
  )
}
