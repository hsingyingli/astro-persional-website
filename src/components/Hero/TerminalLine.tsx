import { useEffect, useRef, useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'

interface Props {
  delay: number,
}

const TerminalLine: React.FC<Props> = ({ delay }) => {
  const [display, setDisplay] = useState(false)
  const refContainer = useRef<HTMLDivElement>(null)

  const handleType = () => {
    if (refContainer.current === null) return
    const element = refContainer.current
    element.scrollTo({ top: element.scrollHeight - element.clientHeight })
    console.log(element.scrollTop)
    console.log(element.scrollHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', handleType)
    setTimeout(() => setDisplay(true), delay)
    return () => window.removeEventListener('resize', handleType)
  }, [])

  const text = `---
title: Greeting
author: Aaron Li
date: ${new Date().toLocaleDateString()}
---
# Welcome
Hi!! I am Aaron Li. Welcome to my website !!

# Skills
* Machine Learning
* Full Stack Web Development
* Devops

Scroll down to know more about me...`

  return (
    display ? (
      <div className='whitespace-pre overflow-auto flex-1 px-2  text-sm md:text-lg ' ref={refContainer}>
        <Typewriter
          words={[text]}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          onType={handleType}
        />
      </div>
    ) : null
  )
}

export default TerminalLine
