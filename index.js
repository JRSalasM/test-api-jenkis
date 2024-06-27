const express = require('express');
const app = express();
const port = 5555;

app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

app.listen(port, () => {
  console.log(`La API está escuchando en http://localhost:${port}`);
});
