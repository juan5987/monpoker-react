const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  const responseData = {
    message: 'monpoker API V1.0'
  };
  res.json(responseData);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
