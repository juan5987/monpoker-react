import React, { useState } from 'react';
import '../styles/header.sass';

const Header = () => {

  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  return (
    <>
      <div className='header'>
        <div className="header__logo">
          <span className='header__logo__text'>monpoker</span>
        </div>
        <div className="header__burger" onClick={() => setIsMenuOpened(!isMenuOpened)}>
          <span className="header__burger__line"></span>
          <span className="header__burger__line"></span>
          <span className="header__burger__line"></span>
        </div>
      </div>
      <nav className={isMenuOpened ? "navbar" : "navbar navbar--open"}>
        <ul className="navbar__list">
          <li className="navbar__list__element">
            <a href="/" className="navbar__list__element__link">accueil</a>
          </li>
          <li className="navbar__list__element">
            <a href="/meals" className="navbar__list__element__link">repas</a>
          </li>
          <li className="navbar__list__element">
            <a href="/planning" className="navbar__list__element__link">planning</a>
          </li>
          <li className="navbar__list__element">
            <a href="/account" className="navbar__list__element__link">compte</a>
          </li>
          <li className="navbar__list__element">
            <a href="/logout" className="navbar__list__element__link">déconnexion</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header;