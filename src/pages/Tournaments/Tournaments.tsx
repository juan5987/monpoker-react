import React from 'react'
import { Link } from 'react-router-dom'
import Tournament from './components/Tournament'
import '../../styles/tournaments.sass'
import '../../styles/tournaments-desktop.sass'

const Tournaments = () => {

  return (
    <div className='tournaments'>
      <div className="tournaments__title">
        <h2 className='tournaments__title__text'>Mes tournois</h2>
        <Link to="/create/tournament" className="tournaments__title__button">
          <div className="tournaments__title__button__plus">+</div>
          <span className="tournaments__title__button__text">créer</span>
        </Link>
      </div>
      <section className="tournaments__searchbar">
        <input type="text" className="tournaments__searchbar__input" id="searchbar" name="searchbar" placeholder='rechercher un tournoi par nom' />
      </section>
      <section className="tournaments__filters">
        <div className="tournaments__filters__element">
          <label htmlFor="element" className="tournaments__filters__element__label">Trier par</label>
          <select name="element" id="element" className='tournaments__filters__element__select'>
            <option value="name" className="tournaments__filters__element__select__option" defaultValue="name">nom</option>
            <option value="date" className="tournaments__filters__element__select__option">date</option>
            <option value="calorie" className="tournaments__filters__element__select__option">buy-in</option>
            <option value="protein" className="tournaments__filters__element__select__option">cash prize</option>
            <option value="carbo" className="tournaments__filters__element__select__option">joueurs</option>
          </select>
        </div>
        <div className="tournaments__filters__element">
          <label htmlFor="element" className="tournaments__filters__element__label">Ordre</label>
          <select name="element" id="element" className='tournaments__filters__element__select' defaultValue="ascending">
            <option value="ascending" className="tournaments__filters__element__select__option">croissant</option>
            <option value="descending" className="tournaments__filters__element__select__option">décroissant</option>
          </select>
        </div>
      </section>
      <section className="tournaments__checkbox">
        <input type="checkbox" className="tournaments__checkbox__input" checked />
        <label htmlFor="checkbox" className="tournaments__checkbox__label">afficher les tournois terminés</label>
      </section>
      <span className='tournaments__infos'>Cliquez sur un tournoi pour plus d'infos</span>
      <section className="tournaments__tournaments">
        <Tournament status="prévu" nom="Tournoi du samedi 1" mise={10} prix={50} joueurs={5} date='26/09/2023' />
        <Tournament status="terminé" nom="Tournoi d'anniversaire" mise={5} prix={40} joueurs={8} date='26/09/2023' />
        <Tournament status="prévu" nom="Chez Fred" mise={10} prix={40} joueurs={4} date='26/09/2023' />
        <Tournament status="prévu" nom="Chez Wam" mise={50} prix={300} joueurs={6} date='26/09/2023' />
        <Tournament status="terminé" nom="test" mise={5} prix={25} joueurs={5} date='26/09/2023' />
        <Tournament status="terminé" nom="test" mise={5} prix={25} joueurs={5} date='26/09/2023' />
        <Tournament status="terminé" nom="test" mise={5} prix={25} joueurs={5} date='26/09/2023' />
        <Tournament status="terminé" nom="test" mise={5} prix={25} joueurs={5} date='26/09/2023' />
        <Tournament status="terminé" nom="test" mise={5} prix={25} joueurs={5} date='26/09/2023' />
        <Tournament status="terminé" nom="test" mise={5} prix={25} joueurs={5} date='26/09/2023' />
        <Tournament status="terminé" nom="test" mise={5} prix={25} joueurs={5} date='26/09/2023' />
        <Tournament status="terminé" nom="test" mise={5} prix={25} joueurs={5} date='26/09/2023' />
        <Tournament status="terminé" nom="test" mise={5} prix={25} joueurs={5} date='26/09/2023' />
        <Tournament status="terminé" nom="test" mise={5} prix={25} joueurs={5} date='26/09/2023' />
        <Tournament status="terminé" nom="test" mise={5} prix={25} joueurs={5} date='26/09/2023' />
        <Tournament status="terminé" nom="test" mise={5} prix={25} joueurs={5} date='26/09/2023' />
        <Tournament status="terminé" nom="test" mise={5} prix={25} joueurs={5} date='26/09/2023' />
        <Tournament status="terminé" nom="test" mise={5} prix={25} joueurs={5} date='26/09/2023' />
        <Tournament status="terminé" nom="test" mise={5} prix={25} joueurs={5} date='26/09/2023' />
        <Tournament status="terminé" nom="test" mise={5} prix={25} joueurs={5} date='26/09/2023' />
        <Tournament status="terminé" nom="test" mise={5} prix={25} joueurs={5} date='26/09/2023' />
      </section>
    </div>
  )
}

export default Tournaments;