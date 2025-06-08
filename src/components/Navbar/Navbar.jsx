import React from 'react'
import './Navbar.css'
import menu from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import serch from '../../assets/search.png'
import mic from '../../assets/mic.png'
import plus from '../../assets/plus.png'
import bell from '../../assets/bell.png'
import { Link } from 'react-router-dom'

const Navbar = ({setsidebar}) => {
  return (
    <nav className='nav-bar'>
        <div onClick={()=>{setsidebar((prev)=>!prev)}} className='nav-left'>
            <img  className='menu' src={menu}/>
            <Link to={'/'} className='logo'>
            <img src={logo}/>
            <span>YouTube</span>
            </Link>
        </div>

        <div className='nav-mid'>
            <div className='nav-mid-search'>
            <input type='text' placeholder='Search'/>
            <img className='search' src={serch}/>
            </div>

            <div className='nav-mic'>
                <img src={mic}/>
            </div>

        </div>


        <div className='nav-right'>
            <div className='plus'>
                <img src={plus}/>
                <span>Create</span>
            </div>
            <img src={bell} className='bell'/>
        </div>

</nav >
  )
}

export default Navbar