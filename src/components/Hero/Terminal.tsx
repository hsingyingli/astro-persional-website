import { useEffect, useState } from "react"
import TerminalLine from "./TerminalLine"

const Terminal = () => {

  return (
    <div
      className="max-w-2xl w-full aspect-square sm:aspect-video border-2 border-gray-200 rounded-lg bg-black animate-[open_0.2s_linear]"
    >
      <div className="flex gap-2 border-b-gray-100 border-b-2 py-2 px-1">
        <div className="rounded-full w-4 aspect-square bg-red-500"></div>
        <div className="rounded-full w-4 aspect-square bg-yellow-500"></div>
        <div className="rounded-full w-4 aspect-square bg-green-500"></div>
      </div>
      <div className='text-white p-2 overflow-auto'>
        <TerminalLine delay={800} query={"pwd"} answer={"Aaron's persional website includes blog and portfolio"} speed={150} />
        <TerminalLine delay={800 + 2000} query={"ls"} answer={"greet.md"} speed={150} />
        <TerminalLine delay={800 + 2000 + 2000} query={"cat greet.md"} answer={`Hi, I am Aaron Li. 
Welcome to my website!
( Machine Learning / Web development / DevOps)
Scroll down to see more
`} speed={150} />
      </div>
    </div>)
}

export default Terminal
