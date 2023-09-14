import { useState, useEffect } from 'react';

interface ApiError {
  message: string;
}

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

function useApi(endpoint: string, method: HttpMethod = 'GET', payload?: any) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ApiError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestOptions: RequestInit = {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
        };

        if (method === 'POST' && payload) {
          requestOptions.body = JSON.stringify(payload);
        }

        const response = await fetch(endpoint, requestOptions);
        if (!response.ok) {
          const errorMessage = `Réponse non valide de l'API (${response.status})`;
          throw new Error(errorMessage);
        }
        const jsonData: any = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          const apiError: ApiError = {
            message: err.message,
          };
          setError(apiError);
        } else {
          setError({ message: 'Une erreur inconnue s\'est produite.' });
        }
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, method, payload]);

  return { data, loading, error };
}

export default useApi;
