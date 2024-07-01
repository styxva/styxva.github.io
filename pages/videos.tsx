import Head from "next/head"
import Section from "@/components/section"
import Footer from "@/components/footer"
import HomeLink from "@/components/home-link"
import VideoContainer from "@/components/video-download-container"

import raw from "/video_attrs.js"

import type { GetServerSideProps } from "next"

import { read_file_and_process } from "/read_files.tsx"
import type { AudioData } from "@public/read_files"

// type Props = {
//   audio_data: AudioData[]
// }
//
// export const getServerSideProps: GetServerSideProps = async () => {
//   return {
//     props: {
//       audio_data: read_file_and_process("/video_attrs")
//     },
//   }
// }
//
export default function NotFound() {

  interface AudioData {
    title: string
    author: string
    music_title: string
  }

  const lines = raw.split('\n')

  const params: AudioData[] = lines.map(line => {
    const [title, author, music_title] = line.split('|').map(item => item.trim())
    return { title, author, music_title }
  })

  const video_array = []

  for (let i = 0; i < params.length; i++) {
     video_array.push(
      <VideoContainer
        key={i}
        href={"#"}
        title={params[i].title}
        music={params[i].music_title}
        author={params[i].author}
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

        <div id="video-container-container">

          {
            video_array
          }

        </div>

      </Section>

      <Footer />
    </>
  )
}

