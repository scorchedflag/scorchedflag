import React from 'react'
import {NavLink} from 'react-router-dom'
import '../style/NavBar.css'

const NavBar = () => 
    <div className='nav-container'>
        <NavLink className='home-link'
            to='/'
            exact>Home
        </NavLink>
        <NavLink className='about-link'
            to='/about'
            exact>About
        </NavLink>
        <NavLink className='flags-link'
            to='/flags'
            exact>Original Hand Made Wood Flags
        </NavLink>
        <NavLink className='contact-link'
            to='/contact'
            exact>Contact Me
        </NavLink>
    </div>


export default NavBar
