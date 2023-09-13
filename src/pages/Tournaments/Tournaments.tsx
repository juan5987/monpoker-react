import React from 'react'
import Tournament from './components/Tournament'
import '../../styles/tournaments.sass'

const Home = () => {
  return (
    <div className='tournaments'>
      <div className="tournaments__title">
        <h2 className='tournaments__title__text'>Mes tournois</h2>
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
      <section className="tournaments__legend">
          <div className="tournaments__legend__element">
            <div className="tournaments__legend__element__box tournaments__legend__element__box--pending"></div>
            <span className="tournaments__legend__element__text tournaments__legend__element__text--pending">prévu</span>
          </div>
          <div className="tournaments__legend__element">
            <div className="tournaments__legend__element__box tournaments__legend__element__box--finished"></div>
            <span className="tournaments__legend__element__text tournaments__legend__element__text--finished">terminé</span>
          </div>
        </section>
      <section className="tournaments__tournaments">
        <Tournament />
        <Tournament />
        <Tournament />
        <Tournament />
        <Tournament />
        <Tournament />
        <Tournament />
        <Tournament />
        <Tournament />
        <Tournament />
        <Tournament />
        <Tournament />
        <Tournament />
        <Tournament />
        <Tournament />
        <Tournament />
        <Tournament />
        <Tournament />
        <Tournament />
        <Tournament />
        <Tournament />
      </section>
    </div>
  )
}

export default Home;