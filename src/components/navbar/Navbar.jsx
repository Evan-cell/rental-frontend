import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"
function Navbar() {
  const [open,setOpen] = useState(false)

  const user = true
  return (
    <nav>
      <div className="left">
        <a  className='logo' href="/">
          <img src="/logo.png" alt="" />
          <span>Pata keja</span>
        </a>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/agents">Agents</a>
      </div>
      <div className="right">
        {user? (<div className='user'>
          <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <span>Evan kimani</span>
          <Link className='profile' to="/profile">
            <div className="notification">3</div>
            <span>profile</span>
          </Link>
        </div>):(<><a href="/signin">SignIn</a>
        <a href="/signup"className='register'>SignUp</a></>)}
        <div className="menuIcon">
          <img src="/menu.png" onClick={()=>setOpen(!open)} alt="" />
        </div>
        <div className={open ? "menu active" : "menu"}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/agents">Agents</a>
        <a href="/signin">SignIn</a>
        <a href="/signup">SignUp</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
