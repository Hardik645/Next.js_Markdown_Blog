import getFormattedDate from "@/lib/getFormattedDate"
import { getSortedPostsData } from "@/lib/posts"
import Link from "next/link"

export const Posts = () => {
    const posts = getSortedPostsData()
  return (
    <section className="mt-6 mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold dark:text-deer">Blog</h2>
            <ul className="w-full">
                {posts.map(post => (
                    <li className="mt-4 text-2xl dark:text-deer" key={post.id}>
                    <Link className="underline hover:text-black/70" href={`/posts/${post.id}`}>{post.title}</Link>
                    <br />
                    <p className="text-sm mt-1">{getFormattedDate(post.date)}</p>
                </li>
                ))}
            </ul>
        </section>
  )
}
