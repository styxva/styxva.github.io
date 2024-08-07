import Head from "next/head"
import Section from "@/components/section"
import Footer from "@/components/footer"
import HomeLink from "@/components/home-link"

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found | styx</title>
      </Head>

      <Section id="error" isCentered>
        <HomeLink />

        <h1>Page Not Found</h1>
      </Section>

      <Footer />
    </>
  )
}
