const express = require('express');
const app = express();

// app.get('/', (req, res) => {
//   res.send(`Welcome`);
// });

// app.get('/cats/', (req, res) => {
//   res.send(`Cats`);
// });

app.listen(7777, () => {
  console.log('listening on port 7777');
});
