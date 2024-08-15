import Head from "next/head"
import Section from "@/components/section"
import Footer from "@/components/footer"
import HomeLink from "@/components/home-link"

export default function Home() {
  return (
    <>
      <Head>
        <title>Imprint | styx</title>
      </Head>

      <Section id="privacy-policy" isCentered>
        <HomeLink />

        <h1>Imprint</h1>
        
        <h2>Contact</h2>
        <p>styx</p>
        <p>help@styx-va.com</p>
        <p>Castle-Road 1a, Royal Capital, Celestia</p>

      </Section>

      <Footer />
    </>
  )
}
