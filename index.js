const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor Node.js funcionando ✅');
});

app.post('/webhook', (req, res) => {
  console.log('Webhook recibido:', req.body);
  res.status(200).send('Webhook recibido');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
