import React from 'react'
import '../styles/header.sass';

const Header = () => {
  return (
    <div className='header'>
      <div className="header__logo">
        <img className='header__logo__img' src="" alt="logo" />
        <span className='header__logo__text'>monpoker</span>
      </div>
      <div className="header__burger">
        <span className="header__burger__line"></span>
        <span className="header__burger__line"></span>
        <span className="header__burger__line"></span>
      </div>
    </div>
  )
}

export default Header;