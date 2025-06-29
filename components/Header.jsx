import React from 'react'
import globe from '../images/globe.png'

const Header = () => {
  return (
    <header>
        <img src={globe}  alt="Globe icon" />
        <h1>My Travel Journal</h1>
    </header>
  )
}

export default Header