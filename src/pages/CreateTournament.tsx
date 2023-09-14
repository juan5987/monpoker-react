import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { createTournament } from '../services/apiCreateTournament'
import { ITournament } from '../types/tournament'
import '../styles/create-tournament.sass'
import '../styles/create-tournament-desktop.sass'

const CreateTournament = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState<boolean>(false);
    const [apiError, setApiError] = useState<string>('');

    const onSubmit = async (data: any) => {
        try {
            setLoading(true);
            const response = await createTournament(data);
            setLoading(false);
            setApiError('');
            console.log(response)
        } catch (error: any) {
            setLoading(false);
            setApiError(error.message);
        }
    }

    if (loading) {
        return (
            <section className='createtournament'>
                <div className="createtournament__title">
                    <h2 className='createtournament__title__text'>Créer un tournoi</h2>
                </div>
                <div className='loading'>Chargement en cours...</div>
            </section>
        )
    }

    return (
        <section className='createtournament'>
            <div className="createtournament__title">
                <h2 className='createtournament__title__text'>Créer un tournoi</h2>
            </div>
            <span className='createtournament__form__info'>Tous les champs doivent être complétés</span>
            <form className="createtournament__form" onSubmit={handleSubmit(onSubmit)}>
                <div className="createtournament__form__element">
                    <label htmlFor="name" className="createtournament__form__element__label">Nom du tournoi</label>
                    <input type="text" className="createtournament__form__element__input" id="name" {...register("name", { required: true })} />
                    {errors.name?.type === 'required' && <p role="alert" className='createtournament__form__error'>Veuillez renseigner le nom du tournoi</p>}
                </div>
                <div className="createtournament__form__element">
                    <label htmlFor="date" className="createtournament__form__element__label">Date du tournoi</label>
                    <input type="date" className="createtournament__form__element__input" id="date" {...register("date", { required: true })} />
                    {errors.date?.type === 'required' && <p role="alert" className='createtournament__form__error'>Veuillez renseigner la date</p>}
                </div>
                <div className="createtournament__form__element">
                    <label htmlFor="players" className="createtournament__form__element__label">Nombre de joueurs</label>
                    <input type="number" className="createtournament__form__element__input" id="players" step={1} {...register("players", { required: true })} />
                    {errors.players?.type === 'required' && <p role="alert" className='createtournament__form__error'>Veuillez renseigner le nombre de joueurs</p>}
                </div>
                <div className="createtournament__form__element">
                    <label htmlFor="buyin" className="createtournament__form__element__label">Mise</label>
                    <input type="number" className="createtournament__form__element__input" id="buyin" step={1} placeholder='€' {...register("buyin", { required: true })} />
                    {errors.buyin?.type === 'required' && <p role="alert" className='createtournament__form__error'>Veuillez renseigner la mise</p>}
                </div>
                <div className="createtournament__form__element">
                    <label htmlFor="prize" className="createtournament__form__element__label">Prix</label>
                    <input type="number" className="createtournament__form__element__input" id="prize" step={1} placeholder='€' {...register("prize", { required: true })} />
                    {errors.prize?.type === 'required' && <p role="alert" className='createtournament__form__error'>Veuillez renseigner le prix</p>}
                </div>
                <div className="createtournament__form__element">
                    <label htmlFor="prize" className="createtournament__form__element__label">Statut</label>
                    <select className="createtournament__form__element__input" id="prize" {...register("status", { required: true })}>
                        <option className='createtournament__form__element__input__option' value="prévu">prévu</option>
                        <option className='createtournament__form__element__input__option' value="terminé">terminé</option>
                    </select>
                </div>
                <button className='createtournament__form__submit' type="submit">Valider</button>
            </form>
            {
                apiError && <div className='createtournament__apiError'>
                    <p role="alert" className='createtournament__apiError__text'>{apiError}</p>
                    <p role="alert" className='createtournament__apiError__text'>Contactez un administrateur ou réessayez dans quelques minutes</p>
                </div>
            }
        </section>
    )
}

export default CreateTournament