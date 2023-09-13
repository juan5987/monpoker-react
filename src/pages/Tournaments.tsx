import React from 'react'
import '../styles/tournaments.sass'

const Home = () => {
  return (
    <div className='meals'>
      <div className="meals__title">
        <h2 className='meals__title__text'>Mes tournois</h2>
      </div>
      <section className="meals__searchbar">
        <input type="text" className="meals__searchbar__input" id="searchbar" name="searchbar" placeholder='rechercher un tournoi' />
      </section>
      <section className="meals__filters">
        <div className="meals__filters__element">
          <label htmlFor="element" className="meals__filters__element__label">Trier par</label>
          <select name="element" id="element" className='meals__filters__element__select'>
            <option value="name" className="meals__filters__element__select__option" defaultValue="name">nom</option>
            <option value="date" className="meals__filters__element__select__option">date</option>
            <option value="calorie" className="meals__filters__element__select__option">buy-in</option>
            <option value="protein" className="meals__filters__element__select__option">cash prize</option>
            <option value="carbo" className="meals__filters__element__select__option">joueurs</option>
          </select>
        </div>
        <div className="meals__filters__element">
          <label htmlFor="element" className="meals__filters__element__label">Ordre</label>
          <select name="element" id="element" className='meals__filters__element__select' defaultValue="ascending">
            <option value="ascending" className="meals__filters__element__select__option">croissant</option>
            <option value="descending" className="meals__filters__element__select__option">décroissant</option>
          </select>
        </div>
      </section>
    </div>
  )
}

export default Home;