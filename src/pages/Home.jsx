import React, { useEffect, useState } from 'react'
import { fetchPosts } from '../api/api'
import { useQuery } from 'react-query'

const Home = () => {
 
  const {data,isLoading,isError,error} = useQuery({
    queryKey:["posts"],
    queryFn:fetchPosts,
    staleTime:10000
  })

  if(isLoading) return <p>Loading...</p>
  if(isError) return <p>Error {error.message || "Something went wrong."} </p>

  return (
    <div className='home'>
      {
       data?.map((post)=>{
          return <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        })
      }
    </div>
  )
}

export default Home