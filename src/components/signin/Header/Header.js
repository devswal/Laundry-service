import React from 'react'
import './Header.css'

const Header = () => {
  return (
      <div className='create__header'>
        <div className='create__header__heading'>
            <p>LAUNDRY</p>
        </div>
        <div className='create__header__nav'>
            <p>Home</p>
            <p>Pricing</p>
            <p>Career</p>
            <p id='username'>SignIn</p>
        </div>
      </div>
  )
}

export default Header
