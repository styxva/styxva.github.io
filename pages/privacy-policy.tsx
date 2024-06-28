import Head from "next/head"
import Section from "@/components/section"
import Footer from "@/components/footer"
import HomeLink from "@/components/home-link"

export default function Home() {
  return (
    <>
      <Head>
        <title>Privacy Policy | styx</title>
      </Head>

      <Section id="privacy-policy">
        <HomeLink />

        <h1>Privacy Policy</h1>

        <h2>Github Pages Service</h2>

        <p>This Website is hosted as a GitHub Pages website. GitHub may collect User Personal Information from visitors to this GitHub Pages website, including logs of visitor IP addresses, to comply with legal obligations, and to maintain the security and integrity of this Website and the Service. See the GitHub Privacy Statement for details.</p>
        
        <h2>Data Collection</h2>

        <p><strong>Website Analytics:</strong> This website does not use any analytics tools.</p>

        <p><strong>Cookie Usage:</strong> This website does not use any cookies</p>

        <h2>Linked Services</h2>

        <p>This website contains links to other services. If you follow these links, you should become aware of their terms of service.</p>

        <p>The following are links to the respective terms of service.</p>

        <ul>
          <li>
            YouTube (Google): <a href="https://www.youtube.com/static?template=terms" target="_blank">TOS</a>, <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a>
          </li>
          <li>
            Instagram (Meta): <a href="https://help.instagram.com/581066165581870" target="_blank">TOS</a>, <a href="https://privacycenter.instagram.com/policy" target="_blank">Privacy Policy</a>
          </li>
          <li>
            Threads (Meta): <a href="https://help.instagram.com/769983657850450" target="_blank">TOS</a>, <a href="https://privacycenter.instagram.com/policy" target="_blank">Privacy Policy</a>
          </li>
          <li>
            TikTok: <a href="https://www.tiktok.com/legal/page/eea/terms-of-service/en" target="_blank">TOS</a>, <a href="https://www.tiktok.com/legal/page/eea/privacy-policy/en" target="_blank">Privacy Policy</a>
          </li>
          <li>
            Twitter (Papa Elon): <a href="https://x.com/en/tos" target="_blank">TOS</a>, <a href="https://x.com/en/privacy" target="_blank">Privacy Policy</a>
          </li>
        </ul>

      </Section>

      <Footer />
    </>
  )
}
