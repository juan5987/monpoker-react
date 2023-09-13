import React from 'react'
import '../../../styles/tournament.sass'

interface ITournament {
  status: string,
  nom: string,
  mise: number,
  prix: number,
  joueurs: number,
  date: string,
}

const Tournament = ({status, nom, mise, prix, joueurs, date}:ITournament) => {
  return (
    <div className={status === "pending" ? "tournament" : "tournament tournament--finished"}>
      <h2 className={status === "pending" ? "tournament__title" : "tournament__title tournament__title--finished"}>{nom}</h2>
      <div className={status === "pending" ? "tournament__info" : "tournament__info tournament__info--finished"}>
        <div className="tournament__info__element">
          <span className="tournament__info__element__label">mise</span>
          <span className="tournament__info__element__text">{mise}€</span>
        </div>
        <div className="tournament__info__element">
          <span className="tournament__info__element__label">prix</span>
          <span className=" tournament__info__element__text">{prix}€</span>
        </div>
        <div className="tournament__info__element">
          <span className="tournament__info__element__label">joueurs</span>
          <span className=" tournament__info__element__text">{joueurs}</span>
        </div>
        <div className="tournament__info__element">
          <span className="tournament__info__element__label">date</span>
          <span className=" tournament__info__element__text">{date}</span>
        </div>
      </div>
    </div>
  )
}

export default Tournament