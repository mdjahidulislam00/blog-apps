'use client'
import { listPosts } from "@/graphql/queries"
import { API } from "aws-amplify"
import { useEffect, useState } from "react"


function BlogPost() {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetchPost()
    }, [])

    const fetchPost = async()=> {
        const postData = await  API.graphql({
            query: listPosts
        })
       
        setPosts(postData.data.listPosts.items )
    }
  return (
    <div>
{
    posts.map((a,b)=>(
        <h2 key={b}>{a.title}</h2>
    ))
}

    </div>
  )
}

export default BlogPost