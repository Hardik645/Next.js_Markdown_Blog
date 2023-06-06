import getFormattedDate from "@/lib/getFormattedDate"
import { getPostData, getSortedPostsData } from "@/lib/posts"
import {notFound} from "next/navigation"
import Link from "next/link"

type Params ={
    params:{
        postid:string,
    },
}
export function generateStaticParams(){
    const  posts =getSortedPostsData()
    return posts.map((post)=>(
        {
            postid:post.id
        }
    ))
}

export function generateMetadata({params:{postid}}:Params){
    const  posts =getSortedPostsData().find(post=>post.id==postid)
    if(!posts){
        return {
            title:"Post Not Found"
        }
    }
        return {
            title:posts.title,
        }
}

export default async function post({params:{postid}}:Params){
    const  posts =getSortedPostsData()
    if(!posts.find(post=>post.id==postid)){
        return notFound()
    }

    const {title,content,date}= await getPostData(postid)
    const pubDate=getFormattedDate(date)
    return (
        <main className="px-6 prose prose-xl prose-strong:text-deer marker:text-deer mx-auto text-deer">
            <h1 className="text-3xl mt-4 mb-0 text-deer">{title}</h1>
            <p className="mt-0">
                {pubDate}
            </p>
            <article>
                <section dangerouslySetInnerHTML={{ __html: content }}/>
                <p>
                    <Link href="/" className="text-deer">← Back to home</Link>
                </p>
            </article>
        </main>
    )
}