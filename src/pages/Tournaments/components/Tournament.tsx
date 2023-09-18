import React from 'react'
import { ITournament } from '../../../types/tournament'
import '../../../styles/tournament.sass'

const Tournament = ({status, nom, mise, prix, joueurs, date}:ITournament) => {
  return (
    <div className={status === "prévu" ? "tournament" : "tournament tournament--finished"}>
      <h2 className={status === "prévu" ? "tournament__title" : "tournament__title tournament__title--finished"}>{nom}</h2>
      <span className="tournament__date">26/09/2023</span>
    </div>
  )
}

export default Tournament