import type { MDXInstance } from "astro"
import { useMemo, useState } from "react"
import Card from "../Card"

interface Props {
  blogs: MDXInstance<Record<string, any>>[]
}

const BlogList: React.FC<Props> = ({ blogs }) => {
  const [title, setTitle] = useState("")
  const [categoryList, setCategoryList] = useState<Array<string>>([])

  const categories = useMemo(() => {
    return blogs.reduce<Array<string>>((prev, curr) => {
      const category = curr.frontmatter.category as string
      if (prev.indexOf(category) === -1) prev.push(category)
      return prev
    }, [])
  }, [])

  const handleSelectCategory = (category: string) => {
    setTitle("")
    if (categoryList.indexOf(category) === -1) setCategoryList((prev) => [...prev, category])
  }

  const handleRemoveCategory = (category: string) => {
    setTitle("")
    setCategoryList((prev) => prev.filter((c) => c !== category))
  }

  return (
    <div>
      <input
        className="mb-4 p-1 rounded bg-white border-2 border-gray-200 text-black"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)} />
      <div className="flex flex-wrap gap-2">
        {categories.map((c) =>
          <div key={c}
            className="border-teal-500 border-2 text-white rounded-full text-sm cursor-pointer w-fit px-2 py-1 hover:text-gray-300"
            onClick={() => handleSelectCategory(c)}>{c}</div>)}
      </div>
      <hr className="border-[0.5px] my-2" />
      <div className="flex flex-wrap gap-2">
        {
          categoryList.map((c) =>
            <div key={c}
              className="border-red-500 border-2 text-white rounded-full text-sm cursor-pointer w-fit px-2 py-1 hover:text-gray-300"
              onClick={() => handleRemoveCategory(c)}>{c}</div>)
        }
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-6 mt-4">
        {blogs.filter((blog) => {
          if (categoryList.length > 0 && categoryList.indexOf(blog.frontmatter.category) === -1)
            return false
          if (!blog.frontmatter?.title?.toLowerCase().includes(title?.toLowerCase()))
            return false
          return true
        }).map((blog) => <Card 
            key={blog.frontmatter.title}
            url={blog.url as string} 
            imgSrc={blog.frontmatter.src as string} 
            title={blog.frontmatter.title as string} />)}
      </div>
    </div>
  )
}

export default BlogList
