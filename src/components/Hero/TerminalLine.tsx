import { useEffect, useState } from 'react'
import { useTypewriter } from 'react-simple-typewriter'

interface Props {
  delay: number,
  query: string,
  answer: string,
  speed: number
}

interface TypeWritterProps {
  query: string,
  speed: number,
  finish: () => void
}

const TypeWritter: React.FC<TypeWritterProps> = ({ query, speed, finish }) => {
  const [text, helper] = useTypewriter({
    words: [query],
    typeSpeed: speed
  })

  /* Hook helper */
  const { isDone } = helper
  useEffect(() => {
    if (isDone) finish()
  }, [isDone])

  return <span>{text}</span>
}

const TerminalLine: React.FC<Props> = ({ delay, query, answer, speed }) => {
  const [display, setDisplay] = useState(false)
  const [isDone, setIsDone] = useState(false)
  const finishTyping = () => setIsDone(true)

  useEffect(() => {
    setTimeout(() => setDisplay(true), delay)
  }, [])

  return (
    display ? (
      <div className='text-sm sm:text-lg md:text-xl mb-2'>
        <div className='flex gap-3'>
          <p className='racking-wide'> Aaron in <span className='text-teal-400'>website</span>   🚀astro v2.1.3  <span className='text-teal-400'>❯</span></p>
          <TypeWritter query={query} speed={speed} finish={finishTyping} />
        </div>
        <p style={{ display: isDone ? "block" : "none" }} className='whitespace-pre'>{answer}</p>
      </div>) : null
  )
}

export default TerminalLine
