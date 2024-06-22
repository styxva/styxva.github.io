import Head from "next/head"
import Section from "@/components/section"
import Footer from "@/components/footer"
import HomeLink from "@/components/home-link"

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Pricing | styx</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Section id="pricing">
        <HomeLink />

        <h1>Pricing</h1>

        <p>My pricing will entirely revolve around the final length of the audio file.</p>

        <h2>Standard Fee</h2>

        As mentioned above; pricing is based off of a base fee of 15$ per 30 seconds. To make fees smoother, there will be scaling as follows: every started five seconds interval will trigger a price increase of 2.5$. You can find examples in the following table:
        
        <table>
          <tr>
            <th>...</th>
            <th>20s</th>
            <th>22s</th>
            <th>25s</th>
            <th>27s</th>
            <th>30s</th>
            <th>...</th>
          </tr>
          <tr>
            <td>...</td>
            <td>10$</td>
            <td>12.5$</td>
            <td>12.$</td>
            <td>15$</td>
            <td>15$</td>
            <td>...</td>
          </tr>
        </table>
        
      </Section>

      <Footer />
    </>
  )
}
