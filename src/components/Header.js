import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AlignJustify } from 'lucide-react'
import learnzee from "../images/learnzee.png"

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  }

  // Function to close the menu after clicking a link
  const closeMenu = () => {
    setOpen(false); // Close the menu
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
          <a href='./' className='hidden md:block text-2xl md:text-4xl text-[#FF8C00] text-decoration-none font-poppins'>
            <Link to='/'>Learnzee</Link>
          </a>
        </div>
        <AlignJustify className=' cursor-pointer md:hidden' onClick={handleToggle} />
      </div>

      {/* Desktop Menu */}
      <div className='bar-holder'>
        <nav id="nav">
          <ul className=' font-poppins'>
            <li><Link to='/games'>Games</Link></li>
            <li><Link to='/diy'>DIY</Link></li>
            <li><Link to='/resources'>Resources</Link></li>
            <li><Link to='/transcribers'>Transcribers</Link></li>
            <li><Link to='/story'>AI Stories</Link></li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`${open ? 'block' : 'hidden'} md:hidden`}>
        <nav id="nv">
          <ul className=' font-poppins'>
            <li onClick={closeMenu}><Link to='/'>Home</Link></li>
            <li onClick={closeMenu}><Link to='/games'>Games</Link></li>
            <li onClick={closeMenu}><Link to='/diy'>DIY</Link></li>
            <li onClick={closeMenu}><Link to='/resources'>Resources</Link></li>
            <li onClick={closeMenu}><Link to='/transcribers'>Transcribers</Link></li>
            <li onClick={closeMenu}><Link to='/story'>AI Stories</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
