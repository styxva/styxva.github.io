import Head from "next/head"
import { GetStaticPropsResult } from "next"
import Section from "@/components/section"
import Footer from "@/components/footer"
import HomeLink from "@/components/home-link"
import VideoContainer from "@/components/video-download-container"
import Button from "@/components/button"
import styles from "./videos.module.css"
import fs from "fs"
import path from "path"

interface AudioData {
  title: string
  author: string
  music: string
  dlLink: string
}

interface Props {
  audioData: AudioData[]
}

export default function Videos({ audioData }: Props) {
  let videos = [];
  for (let i = 0; i < audioData.length; i++) {
     videos.push(
      <VideoContainer
        key={i}
        href={audioData[i].dlLink}
        title={audioData[i].title}
        music={audioData[i].music}
        author={audioData[i].author}
      />
    )
  }

  return (
    <>
      <Head>
        <title>Videos | styx</title>
      </Head>

      <Section id="videos" isCentered>
        <HomeLink />

        <h2>Video Downloads</h2>

        <p>On this page, you will find the downloads for all audio data of my videos of the last month. You can either pick and choose, or you can download it all at once. When you click on download, you will get a .zip file, which contains the audio data (clean, and with background music) in wav and mp3 format, as well as a text file containing the script in Japanese, English and Romaji (phonetics for the Japanese). It also includes the thumbnail and the actual video.</p>

        <h2>Combined Download</h2>

        <p className={styles.center}>The below button will download all files at once.</p>

        <div className={styles.downloadContainer}>
          <div className={styles.download}>
            <Button href="https://dl.dropboxusercontent.com/scl/fi/urk39fujgnix1lbbn2l21/October.zip?rlkey=t9zksu12d4k7y2od8dfjoyfd7&dl=0">Download</Button>
          </div>
        </div>

        <h2>Individual Downloads</h2>

        <div id="video-container-container">

          {videos}

        </div>

      </Section>

      <Footer />
    </>
  )
}

export function getStaticProps(): GetStaticPropsResult<Props> {
  const p = path.join(process.cwd(), "data/videos.json")
  const data = fs.readFileSync(p, "utf8")
  return {
    props: {
      audioData: JSON.parse(data),
    },
  }
}
