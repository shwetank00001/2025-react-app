import React from 'react'
import logo from '../react-logo.png'
import '../index.css'

const Nav = () => {
  return (
    <div className='navbar'>
        <div className='topNav'>
            <img src={logo} />
            <h1>React Facts</h1>
        </div>
        <h1>React - After a Long Time</h1>
    </div>
  )
}

export default Nav