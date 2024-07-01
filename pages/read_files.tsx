import * as fs from "fs"

type AudioData = {
  title: string
  author: string
  music_title: string
}

export function read_file_and_process(file_path: string) {
  try {
    const data = fs.readFileSync(file_path, "utf8")
    const lines = data.split('\n')

    console.log("This function is called")

    const result: AudioData[] = lines.map(line => {
      const [title, author, music_title] = line.split('|').map(item => item.trim())
      return { title, author, music_title }
    })

    return result
  } catch(err) {
    console.log("Error reading the file: ${err}")
    return []
  }
}

