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

      <Section id="videos">
        <HomeLink />

        <h2>Video Downloads</h2>

        <p>On this page, you will find the downloads for all videos of the last month. You can either pick and choose videos, or you can download them all at once. When you download a video, you will get a .zip file, which contains all audio files, raw and edited, in wav and mp3 format, as well as a text file containing the script in Japanese, English and Romaji (phonetics for the Japanese).</p>
        <p>Due to licensing, I can obviously not include the background music in the download. For that reason, the name of the music I used is displayed below the images of each download, and also included in the text file. If you want to add the music to the audio, you will have to do that manually. Please understand.</p>

        <h2>Combined Download</h2>

        <p className={styles.center}>The below button will download all files at once.</p>

        <div className={styles.download}>
          <Button href="https://dl.dropboxusercontent.com/scl/fi/6ao0rrz41kvcelvxe9oq0/June-Combined.zip?rlkey=q7kp2eztuxoe3d3dcivcb3x4d&st=a08fvot4&dl=0">Download</Button>
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
