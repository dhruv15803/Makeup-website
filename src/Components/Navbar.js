import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {

  const showNavLinks = ()=>{
    let x = document.getElementsByClassName('nav-menu')[0];
    x.classList.toggle('active');
  }

  return (
    <>
    <nav id="navbar">
        <div id="navLeft" onClick={()=>window.location = '/'}>
            GLAMGLOW
        </div>
        <ul className='nav-menu'>
            <div><li><Link to="/maybelline">maybelline</Link></li></div>
            <div><li><Link to="/l'oreal">l'oreal</Link></li></div>
            <div><li><Link to="/pacifica">pacifica</Link></li></div>
            <div><li><Link to="/marcelle">marcelle</Link></li></div>
            <div><li><Link to="/milani">milani</Link></li></div>
            <div><li><Link to="/zorah">zorah</Link></li></div>
        </ul>
        <div id="navRight">
            <button className="navBtn" id="cartBtn" onClick={()=>window.location='/Cart'}>Cart</button>
            <i class="fa-solid fa-cart-shopping" style={{color:'#00000'}} onClick={()=>window.location='/Cart'}></i>
        </div>
        <div id="hamburger" onClick={showNavLinks}>
          <i class="fa-solid fa-bars" style={{color:'#00000'}}></i>
        </div>
    </nav>
    </>
  )
}
