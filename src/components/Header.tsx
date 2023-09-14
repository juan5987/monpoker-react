import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_white.png'
import '../styles/header.sass';
import '../styles/header-desktop.sass';

const Header = () => {

  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const handleCloseMenu = (e: any) => {
    e.preventDefault();
    setIsMenuOpened(false);
  }

  return (
    <>
      <div className='header'>
        <div className="header__logo">
          <img src={logo} alt="logo" className="header__logo__img" width={40} />
          <span className='header__logo__text'>monpoker</span>
        </div>
        <nav className="navbar--desktop">
        <ul className="navbar--desktop__list">
          <li className="navbar--desktop__list__element" onClick={handleCloseMenu}>
            <Link to="/" className="navbar--desktop__list__element__link">accueil</Link>
          </li>
          <li className="navbar--desktop__list__element" onClick={handleCloseMenu}>
            <Link to="/tournaments" className="navbar--desktop__list__element__link">tournois</Link>
          </li>
          <li className="navbar--desktop__list__element" onClick={handleCloseMenu}>
            <Link to="/chips" className="navbar--desktop__list__element__link">jetons</Link>
          </li>
          <li className="navbar--desktop__list__element" onClick={handleCloseMenu}>
            <Link to="/account" className="navbar--desktop__list__element__link">compte</Link>
          </li>
          <li className="navbar--desktop__list__element" onClick={handleCloseMenu}>
            <Link to="/logout" className="navbar--desktop__list__element__link">déconnexion</Link>
          </li>
        </ul>
      </nav>
        <div className="header__burger" onClick={() => setIsMenuOpened(!isMenuOpened)}>
          <span className="header__burger__line"></span>
          <span className="header__burger__line"></span>
          <span className="header__burger__line"></span>
        </div>
      </div>
      <nav className={isMenuOpened ? "navbar" : "navbar navbar--open"}>
        <ul className="navbar__list">
          <li className="navbar__list__element" onClick={handleCloseMenu}>
            <Link to="/" className="navbar__list__element__link">accueil</Link>
          </li>
          <li className="navbar__list__element" onClick={handleCloseMenu}>
            <Link to="/tournaments" className="navbar__list__element__link">tournois</Link>
          </li>
          <li className="navbar__list__element" onClick={handleCloseMenu}>
            <Link to="/chips" className="navbar__list__element__link">jetons</Link>
          </li>
          <li className="navbar__list__element" onClick={handleCloseMenu}>
            <Link to="/account" className="navbar__list__element__link">compte</Link>
          </li>
          <li className="navbar__list__element" onClick={handleCloseMenu}>
            <Link to="/logout" className="navbar__list__element__link">déconnexion</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header;