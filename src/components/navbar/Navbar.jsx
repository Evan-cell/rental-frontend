import React, { useState } from 'react'
import "./navbar.scss"
function Navbar() {
  const [open,setOpen] = useState(false)
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
        <a href="/signin">SignIn</a>
        <a href="/signup"className='register'>SignUp</a>
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
