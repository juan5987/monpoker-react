export interface ITournament {
    id?: number,
    status: string,
    nom: string,
    mise: number,
    prix: number,
    joueurs: number,
    date: string,
    userId?: number,
  }