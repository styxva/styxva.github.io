import Head from "next/head"
import Section from "@/components/section"
import Footer from "@/components/footer"
import HomeLink from "@/components/home-link"

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Terms of Service | styx</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Section id="terms-of-service">
        <HomeLink />

        <h1>Terms of Service</h1>

        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>

        <h2>Fee Schedule</h2>

        <p>One half of the total project fee is due upon contract acceptance with the remaining half due upon project completion all invoices are payable within 10 days of receipt.</p>

        <h2>Estimates</h2>

        <p>Fees shown are estimates. Final fees and expenses shall be shown when invoice is rendered. The Client's approcal shall be obtained for any increases in fees or expenses that exceed the original by 10% or more.</p>

        <h2>Changes</h2>

        <p>The Client will be responsible for any additional fees accrued based on the request made by the Client outside the agreed upon scope.</p>

        <p>Fees will be charged at FEES/HR.</p>

        <h2>Ownership</h2>

        <p>All preperation materials, sketches, visuals, including the electronic files used to create the project remain the property of styx.</p>

        <p>The final product files will become the property of the client mentioned in this proposal only upon final payment of the project.</p>

        <p>Should the client attempt to use/modify/alter/replicate any ideas without making the agreed final payment, legal counsel will be taken.</p>

        <p>By agreeing to the terms of service, you give permission for styx to take your first-born child. As well as your soul. Haha jk you are buying stuff from an influencer, you don’t have a soul.</p>

        <h2>Suspension/Cancellation</h2>

        <p>I reserve the right to suspend any project if Client: interferes with excessive micro managing, demonstrates a continued lack of trust an inability to move forwards after showing more than a reasonable number of unique ideas/concepts and/or shows reluctance in paying the final payment.</p>

        <p>Client reserves the right to suspend or cancel any project, should work completed not meet project objectives as defined in initial planning phases or the customer service experience not meet clearly defined expectations.</p>

        <p>Fair notice will be given by either party with fair chance to remedy the situation without resorting to project suspension or cancellation in the event the project is cancelled, a cancellation fee for work completed to date, based on the contract price and expenses already incurred, shall be paid by the client. suspension or cancellation of the project will not result in any refunds. Ownership of all original artwork shall be retained by styx.</p>
      </Section>

      <Footer />
    </>
  )
}
