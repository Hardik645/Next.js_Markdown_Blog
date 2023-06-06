import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const blogpostsDir= path.join(process.cwd(),"blogposts")

export function getSortedPostsData(){
    const PostsDir = fs.readdirSync(blogpostsDir)

    const allPostsData=PostsDir.map((post)=>{
        const id = post.split(".")[0]
        
        const fullPath = path.join(blogpostsDir,post)
        const fileData = fs.readFileSync(fullPath)
        const postData = matter(fileData)

        const BlogDetails:Blogpost={
            id:id,
            title:postData.data.title,
            date:postData.data.date,
        }
        return BlogDetails
    })

    return allPostsData.sort((a,b)=>a.date<b.date?1:-1)
}

export async function getPostData(id:string){
    const fullPath = path.join(blogpostsDir,id+".md")
    const fileData = fs.readFileSync(fullPath)
    const postData = matter(fileData)

    const postContentInHtml= await remark().use(html).process(postData.content);
    const postContent=postContentInHtml.toString()
    const BlogDetails:Blogpost&{content:string}={
        id:id,
        title:postData.data.title,
        date:postData.data.date,
        content:postContent
    }
    return BlogDetails
}