import { useRef, useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "../../utils/types"
import { AngleLeftIcon, AngleRightIcon } from "./icons"

interface Props {
  projects: Array<Project>
}

const ProjectSlider: React.FC<Props> = ({ projects }) => {
  const [currentProject, setCurrentProject] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const refContainer = useRef<HTMLDivElement>(null)


  useEffect(() => {
    const { current: elContainer } = refContainer
    if (!elContainer) return
    const handleScroll = () => {
      setTranslateX(-currentProject * elContainer.offsetWidth)
    }
    handleScroll()
    window.addEventListener("resize", handleScroll)

    return () => window.removeEventListener("resize", handleScroll)

  }, [currentProject])


  const nextProject = () => {
    setCurrentProject(prev => {
      if (prev === projects.length - 1) return prev
      return prev + 1
    })
  }
  const prevProject = () => {
    setCurrentProject(prev => {
      if (prev === 0) return prev
      return prev - 1
    })
  }


  return (
    <div className="mt-[72px] w-full min-h-[calc(100vh_-_72px)] flex flex-col gap-2 items-center justify-center  relative overflow-hidden">
      <div ref={refContainer} style={{ transform: `translateX(${translateX}px)`, transition: "transform 0.8s ease-in-out" }} className="w-full h-full grid grid-flow-col auto-cols-[100%]">
        {
          projects.map((project, idx) => {
            return (
              <ProjectCard key={project.id} project={project} id={idx + 1} total={projects.length} />
            )
          })
        }
      </div>
      {
        currentProject === 0 ? null : (
          <button className="absolute top-1/4 left-0 p-3" onClick={prevProject}>
            <AngleLeftIcon width={32} height={32} fill='#FFFFFF' />
          </button>
        )
      }
      {
        currentProject === projects.length - 1 ? null : (
          <button className="absolute top-1/4 right-0 p-3" onClick={nextProject}>
            <AngleRightIcon width={32} height={32} fill="#FFFFFF" />
          </button>
        )
      }
    </div>
  )
}

export default ProjectSlider
