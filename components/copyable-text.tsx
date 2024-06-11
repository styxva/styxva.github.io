import { Clipboard, Check } from "@phosphor-icons/react/dist/ssr"
import Button from "./button"
import React, { MouseEventHandler } from "react"

type Props = {
  content: string,
}

export default function CopyableText({ content }: Props) {
  const [showCheckmark, setShowCheckmark] = React.useState(false)

  const handleClick: MouseEventHandler = () => {
    navigator.clipboard.writeText(content)
    setShowCheckmark(true)
    setTimeout(() => setShowCheckmark(false), 1000);
  }

  return (
    <Button onClick={handleClick} inverted>
      {showCheckmark ? (<Check />) : (<Clipboard />)} {content}
    </Button>
  )
}

