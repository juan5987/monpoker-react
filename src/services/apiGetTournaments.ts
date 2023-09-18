import { ITournament } from '../types/tournament';

const BASE_URL = 'http://localhost:3001';

export async function getTournaments(userId:number): Promise<ITournament[]> {
  try {
    const response = await fetch(`${BASE_URL}/tournaments?userId=1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      console.log(response)
      throw new Error('Erreur lors de la récupération des tournois');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error:any) {
    throw new Error(error);
  }
}
