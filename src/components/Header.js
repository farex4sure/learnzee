import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AlignJustify } from 'lucide-react'
import learnzee from "../images/learnzee.png"

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    console.log("clicked", open)
    setOpen(!open);
  }

  const toggleMenu = () => {
    document.querySelector('.menu_trigger').click();
  }
  return (
    <header id="header" className="">
      <a id="logo" href="/"></a>
      <div className='absolute top-0 md:top-[1.5rem] left-0 w-full flex justify-between md:justify-center items-center'>

       <div className='flex flex-col justify-center items-center'>
       <img
        className=' w-12 md:w-20'
          src={learnzee}
        />
      <a href='./' className='hidden md:block text-2xl md:text-4xl text-[#FF8C00] text-decoration-none font-poppins'><Link to='/'>Learncha</Link></a>
       </div>

      <AlignJustify className=' cursor-pointer md:hidden' onClick={handleToggle} />
      </div>

      <div className='bar-holder'>
        <nav id="nav">
            <ul className=' font-poppins'>
              <li onClick={toggleMenu}><a className='cursorpointer'><Link to='/games'>Games</Link></a></li>
              <li onClick={toggleMenu}><a><Link to='/diy'>DIY</Link></a></li>
              <li onClick={toggleMenu}><a><Link to='/resources'>Resources</Link></a></li>
              <li onClick={toggleMenu}><a><Link to='/transcribers'>Transcribers</Link></a></li>
              <li onClick={toggleMenu}><a><Link to='/story'>AI Stories</Link></a></li>
              {/* <li onClick={toggleMenu}><a><Link to='/climate'>AI Stories</Link></a></li> */}
            </ul>
        </nav>
      </div>

      <div className={`${open ? 'block' : 'hidden'} md:hidden`}>
      <nav id="nv">
            <ul className=' font-poppins'>
              <li onClick={toggleMenu}><a className='cursorpointer'><Link to='/games'>Games</Link></a></li>
              <li onClick={toggleMenu}><a><Link to='/diy'>DIY</Link></a></li>
              <li onClick={toggleMenu}><a><Link to='/resources'>Resources</Link></a></li>
              <li onClick={toggleMenu}><a><Link to='/transcribers'>Transcribers</Link></a></li>
              <li onClick={toggleMenu}><a><Link to='/story'>AI Stories</Link></a></li>
              {/* <li onClick={toggleMenu}><a><Link to='/climate'>AI Stories</Link></a></li> */}
            </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header