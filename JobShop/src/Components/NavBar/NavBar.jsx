import React from 'react'
import { Link } from 'react-router-dom'
import NavBut from './NavBut'

const NavBar = () => {
  return (
    <div className='navBar flex justify-between items-center p-[3rem]'>
        <div className='logoDiv'>
            <h1 className='logo text-[25px] text-blueColor'><strong>Job</strong>Shop</h1>
        </div>
        <div className='menu flex gap-8'>
            <Link to="/"><NavBut page="Job"></NavBut></Link>
            <Link to="/reason"><NavBut page="Reason"></NavBut></Link>
            <Link to="/goal"><NavBut page="Goal"></NavBut></Link>
            <Link to="/goal"><NavBut page="Contact"></NavBut></Link>
            <Link to="/goal"><NavBut page="Login"></NavBut></Link>
            <Link to="/goal"><NavBut page="Register"></NavBut></Link>
            
        </div>
    </div>
  )
}

export default NavBar