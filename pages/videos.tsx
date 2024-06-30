import Head from "next/head"
import Section from "@/components/section"
import Footer from "@/components/footer"
import HomeLink from "@/components/home-link"
import VideoContainer from "@/components/video-download-container"

          // <!-- <VideoContainer href="#" title="A long distance love" music="some-music" /> -->
          // <!-- <VideoContainer href="#" title="As long as you're with me" music="test_music" /> -->
          // <!-- <VideoContainer href="#" title="Wind, Flowers and You" music="test_music" /> -->
export default function NotFound() {
  
  const params = [
    {title: "A long distance love", music: "some-music"},
    {title: "As long as you're with me", music: "some-music"},
    {title: "Wind, Flowers and You", music: "some-music"}
  ]
  
  const video_array = []

  for (let i = 0; i < params.length; i++) {
     video_array.push(
      <VideoContainer
        key={i}
        href={"#"}
        title={params[i].title}
        music={params[i].music}
      />
    )
  }

  // const video_array = [{id: 1, container: VideoContainer(title="A long distance love", music="music", href="#")}]
  // const video_array = [<VideoContainer key={1} title="title" music="music" href="href" />]

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

