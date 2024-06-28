import Head from "next/head"
import Section from "@/components/section"
import Footer from "@/components/footer"
import HomeLink from "@/components/home-link"

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Pricing | styx</title>
      </Head>

      <Section id="pricing">
        <HomeLink />

        <h1>Pricing</h1>

        <p>My pricing will revolve entirely around the final length of the audio file. All prices below are denoted in USD.</p>

        <h2>The Base Fee</h2>

        <p>I will take $15 per 30 seconds as base for all calculations. The prices are scaled as follows: every started five second interval will trigger a price increase of $2.5. You can find examples in the following table:</p>

        <div className="overflowContainer">
          <table>
            <thead>
              <tr>
                <th>20s</th>
                <th>22s</th>
                <th>25s</th>
                <th>27s</th>
                <th>30s</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>$10</td>
                <td>$12.5</td>
                <td>$12.5</td>
                <td>$15</td>
                <td>$15</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Translations</h2>

        <p>In the same fashion, the translation fee will be $5 per 30 seconds of final audio time.</p>

        <h2>Cancellation Fee</h2>

        <p>In case, for whatever reason, you want to cancel the project after I have started working on it, the cancellation fee will be 25% of the estimated project fee.</p>
      </Section>

      <Footer />
    </>
  )
}
