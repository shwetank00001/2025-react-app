import React from 'react'
import logo from '../react-logo.png'
import './Header.css'

const Header = () => {
  return (
    <div>
        <header>
            <nav className='nav-header'>
              <img src={logo} alt="react-logo" className='nav-logo'/>
                <ol className='nav-ol'>
                    <li>About me</li>
                    <li>Skills</li>
                    <li>Contacts</li>
                </ol>
            </nav>
            <h2>Hi, This is my revision project. Playing around with react and css.</h2>
        </header>
    </div>
  )
}

export default Header