const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: '*', // Remplacez par l'URL du client
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors());

const port = 3001;

app.get('/', (req, res) => {
  const responseData = {
    message: 'monpoker API V1.0'
  };
  res.json(responseData);
});

// temporaire pour tester la requete du client
app.post('/tournaments', (req, res) => {
  try {
    const tournamentData = req.body;
    res.status(201).json({ message: 'Tournoi créé avec succès' });
  } catch (error) {
    console.error('Erreur lors de la création du tournoi :', error);
    res.status(500).json({ message: 'Erreur lors de la création du tournoi' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});