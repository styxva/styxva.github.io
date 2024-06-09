import Head from "next/head"
import styles from "./index.module.css"
import commonStyles from "@/styles/common.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>styx</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <div className={styles.pfp}>
          <div className={styles.ring}>
            <div className={styles.inner}>
              <img src="/pfp.png" alt="Profile Picture" />
            </div>
          </div>
        </div>

        <h1>Hi, I'm styx!</h1>
      </main>
    </>
  )
}
