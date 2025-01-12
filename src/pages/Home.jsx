import { Link } from 'react-router-dom'
import { fetchPosts } from '../api/api'
import { useQuery } from 'react-query'
import { useState } from 'react'

const Home = () => {
  const [pageNumber,setPageNumber] = useState(0)
 
  const {data,isLoading,isError,error} = useQuery({
    queryKey:["posts",pageNumber],
    queryFn:()=>fetchPosts(pageNumber),
    // cacheTime:1000,
    // staleTime:10000,
    // refetchInterval:1000,
    // refetchIntervalInBackground:false
    keepPreviousData:true
  })

  if(isLoading) return <p>Loading...</p>
  if(isError) return <p>Error {error.message || "Something went wrong."} </p>

  return (
    <div className='home'>
    <div>
    {
       data?.map((post)=>{
          return <div className='post' key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`}>Read More</Link>
          </div>
        })
      }
    </div>

      <div className='pagination'>
        <button disabled={pageNumber===0} onClick={()=>setPageNumber((prev)=>prev-3)}>Prev</button>
        <span>{(pageNumber/3)+1}</span>
        <button onClick={()=>setPageNumber((prev)=>prev+3)}>Next</button>
      </div>
    </div>
  )
}

export default Home