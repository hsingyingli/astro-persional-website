import type { MDXInstance } from "astro"

interface Props {
  blog: MDXInstance<Record<string, any>>
}

const Card: React.FC<Props> = ({ blog }) => {
  return (
    <a href={blog.url}>
      <div>
        <img src={blog.frontmatter.src} width={250} height={200} />
      </div>
      <h1 className="text-center">{blog.frontmatter.title}</h1>
    </a>
  )
}


export default Card
