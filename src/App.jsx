import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import About from './pages/About'
import Home from './pages/Home'
import {QueryClient, QueryClientProvider} from "react-query"
import PostDetails from './pages/PostDetails'

const App = () => {
  const queryClient = new QueryClient()
  const router = createBrowserRouter([
    {
      path:"/",
      element:<MainLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/posts/:id",
          element:<PostDetails/>
        }
      ]
    }
  ])

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  )
}

export default App