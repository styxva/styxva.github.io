import Head from "next/head"
import Section from "@/components/section"
import Footer from "@/components/footer"
import HomeLink from "@/components/home-link"

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Conditions | styx</title>
      </Head>

      <Section id="conditions" isCentered>
        <HomeLink />

        <h1>Conditions</h1>

        <p>By sending me a commission request, you agree to the following conditions.</p>

        <h2>Important</h2>

        <p>Due to time constraints, I will only be able to take on a small number of commissions for the time being. I will definitely get back to you in a timely manner, but might have to decline, or take on the commission at a later date.</p>

        <h2>Languages</h2>

        <p>I will be doing commissions in English, Japanese and German. I can not vouch for pronunciation, which is why I will not be accepting other languages at this point.</p>

        <h2>Scripts</h2>

        <p>I will divide this into two cases:</p>
        
        <ol>
          <li>
            You send me a script in your desired target language.
          </li>
          <li>
            You send me a script which is not in your desired target language, and you want me to translate it for you.
          </li>
        </ol>
        
        <p>At this point in time, I don't feel confident enough in my ability to provide scripts on any professional level, so I will not accept commissions that don't already provide a script. This might change in the future.</p>

        <p>As long as you provide me with what you want me to say, I DO NOT impose any limitations.</p>
        
        <p>I will only accept written scripts, or <strong>clear</strong> audio. I will not accept Reels, TikToks or any sort of unclear audio.</p>

        <p>I do not impose a limit on length.</p>

        <h2>Estimates</h2>

        <p>After you have provided me a script, I will go through it, and provide you a rough estimate of the length of the audio file. Since that will only be an estimate, please do not be surprised if the true final length of the audio, and with it, it's price, differs from what I initially anticipated. It most likely will not happen, but in case I am off by a sizeable amount, you can of course cancel the project. In that case, I will have to take a cancellation fee, due to effort and time already put in.</p>

        <h2>Payment</h2>

        <p>The project fee will be due after everything is done, and before I hand the files over to you.</p>

        <h2>Revisions</h2>

        <p>What is a revision? A revision in my books is; I send you the final audio file, you are not happy with the whole thing, or parts of it, and want me to redo those parts or all of it.</p>
        
        <p>How I handle revisions heavily depends on the length of the project. If it is a sub one minute script; I will be happy to completely rerecord the whole thing twice, in case I was so terrible, that it warrants a whole redo. In case of longer projects, I will do revisions to a certain extend, but I will keep the amount up to my discretion.</p>

        <p>I try my best translating, and will keep you in the loop, as translating into Japanese for example, can be difficult at times. I will not be doing any revisions for translations because of this. If you are in no way, shape or form available for consultation, I will go with what I consider to be the most apt.</p>

        <h2>Ownership & Copyright</h2>

        <p>Once the project is over and I hand you the files; you take ownership over the files. I will keep ownership of any intermediate files, that might have exchanged hands during the project. The copyright will still reside with me. I do not permit redistribution, reselling or other forms of commercial use, unless agreed otherwise.</p>

        <h2>Suspension & Cancellation</h2>

        <p>I reserve the right to suspend the project in case you interfere with excessive micro management, demonstrate a continued lack of trust and/or inability to move forwards with the project and/or you show a considerable reluctance in paying the final fee.</p>

        <p>You reserve the right to suspend or cancel the project, in case work completed does not meet project objectives as defined in the initial planning phase.</p>

        <p>Fair notice will be given by either party, with fair chance to remedy the situation, without resorting to project cancellation or suspension. In the event the project does get cancelled, a cancellation fee for work completed to date, based on the contract price shall be paid by you. This cancellation or suspension will not result in any refunds and ownership of all material will retained by me.</p>

      </Section>

      <Footer />
    </>
  )
}
