import { ITournament } from '../types/tournament';

const BASE_URL = 'http://localhost:3001';

export async function createTournament(data:ITournament) {
  try {
    const response = await fetch(`${BASE_URL}/tournaments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        userId: 1,
      }),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la création du tournoi');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error:any) {
    throw new Error('Erreur lors de la création du tournoi');
  }
}
