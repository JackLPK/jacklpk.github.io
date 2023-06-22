import Image from "next/image"

import { CardData } from "../models"
import { ArrowRightIcon, GithubIcon } from "./Icons"

type Props = {
  project: CardData
  handleTagClick: Function
}

export default function ProjectCard(props: Props) {
  const { project } = props

  const imgElement = (
    <>
      <Image
        src={project.image}
        className="w-full rounded-lg bg-sky-300 object-cover"
        width={420}
        height={280}
        alt={project.alt}
      />
    </>
  )

  const viewSourceElement = (
    <a href={project.sourceUrl} className="flex flex-row items-center gap-2">
      <GithubIcon />
      View Source
    </a>
  )

  const getViewSiteElement = () => {
    // Just use ts-ignore
    return project.siteUrl ? (
      <a href={project.siteUrl} className="flex flex-row items-center gap-2">
        <ArrowRightIcon />
        View Site
      </a>
    ) : (
      <></>
    )
  }

  const tagsElements = project.tags.map((tagText: string, idx: number) => (
    <span
      key={idx}
      className="cursor-pointer text-primary before:content-['#']"
      onClick={(e) => props.handleTagClick(e, tagText)}
    >
      {tagText}
    </span>
  ))

  return (
    <div className="flex max-w-md flex-col rounded-lg bg-slate-200 pb-4">
      {imgElement}
      <h3 className="px-4 pt-3 text-4xl font-bold">{project.title}</h3>

      <p
        className="grow p-4 text-lg"
        dangerouslySetInnerHTML={{ __html: project.descriptionHtml }}
      ></p>

      <div className="px-4">
        {project.siteUrl && getViewSiteElement()}
        {project.sourceUrl && viewSourceElement}
      </div>

      <div className="mt-2 flex flex-wrap gap-3 justify-self-end px-4">
        {tagsElements}
      </div>
    </div>
  )
}
