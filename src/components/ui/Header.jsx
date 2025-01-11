import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div>
        <h1>React Query</h1>
      </div>
      <div className='menu'>

      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      </div>
    
    </div>
  )
}

export default Header