import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const toggleMenu = () => {
    document.querySelector('.menu_trigger').click();
  }
  return (
    <header id="header">
      {/* <div className="left-part"></div> */}
      {/* <a id="logo" href="/"></a> */}
      <div className='absolute top-24 left-0 w-full flex justify-center'>
      <a href='./' className='text-4xl text-[#FF8C00] text-decoration-none font-poppins'><Link to='/'>Learncha</Link></a>
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
    </header>
  )
}

export default Header