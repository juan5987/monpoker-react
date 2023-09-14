import React from 'react'
import '../styles/create-tournament.sass'

const CreateTournament = () => {
    return (
        <section className='createtournament'>
            <div className="createtournament__title">
                <h2 className='createtournament__title__text'>Créer un tournoi</h2>
            </div>
            <span className='createtournament__form__info'>Tous les champs doivent être complétés</span>
            <form className="createtournament__form">
                <div className="createtournament__form__element">
                    <label htmlFor="name" className="createtournament__form__element__label">Nom du tournoi</label>
                    <input type="text" className="createtournament__form__element__input" id="name" name="name" />
                </div>
                <div className="createtournament__form__element">
                    <label htmlFor="date" className="createtournament__form__element__label">Date du tournoi</label>
                    <input type="date" className="createtournament__form__element__input" id="date" name="date" />
                </div>
                <div className="createtournament__form__element">
                    <label htmlFor="players" className="createtournament__form__element__label">Nombre de joueurs</label>
                    <input type="number" className="createtournament__form__element__input" id="players" name="players" step={1} />
                </div>
                <div className="createtournament__form__element">
                    <label htmlFor="buyin" className="createtournament__form__element__label">Mise</label>
                    <input type="number" className="createtournament__form__element__input" id="buyin" name="buyin" step={1} placeholder='€' />
                </div>
                <div className="createtournament__form__element">
                    <label htmlFor="prize" className="createtournament__form__element__label">Prix</label>
                    <input type="number" className="createtournament__form__element__input" id="prize" name="prize" step={1} placeholder='€' />
                </div>
                <div className="createtournament__form__element">
                    <label htmlFor="prize" className="createtournament__form__element__label">Statut</label>
                    <select className="createtournament__form__element__input" id="prize" name="prize">
                        <option className='createtournament__form__element__input__option' value="prévu">prévu</option>
                        <option className='createtournament__form__element__input__option' value="terminé">terminé</option>
                    </select>
                </div>
                <button className='createtournament__form__submit' type="submit">Valider</button>
            </form>
        </section>
    )
}

export default CreateTournament