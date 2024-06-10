import Head from "next/head"
import Section from "@/components/section"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found | styx</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Section id="error">
        <h1>Page Not Found</h1>
      </Section>

      <Footer />
    </>
  )
}

