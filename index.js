const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'app', 'pages', 'main', 'main.html');

  res.sendFile(filePath);
});

// app.get('/cats/', (req, res) => {
//   res.send(`Cats`);
// });

app.listen(7777, () => {
  console.log('listening on port 7777');
});
