import { Link } from 'react-router-dom'
import { fetchPosts } from '../api/api'
import { useQuery } from 'react-query'

const Home = () => {
 
  const {data,isLoading,isError,error} = useQuery({
    queryKey:["posts"],
    queryFn:fetchPosts,
    // cacheTime:1000,
    staleTime:10000,
    // refetchInterval:1000,
    refetchIntervalInBackground:false
  })

  if(isLoading) return <p>Loading...</p>
  if(isError) return <p>Error {error.message || "Something went wrong."} </p>

  return (
    <div className='home'>
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
  )
}

export default Home