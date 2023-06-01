const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');

const Character = require('./app/models/character');

// getting-started.js
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/themysDb');
  console.log('Mongoose Connected');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.use(
  '/resources/css',
  express.static(path.join(__dirname, 'resources', 'css'))
);

app.use(
  '/resources/icons',
  express.static(path.join(__dirname, 'resources', 'icons'))
);

app.use(
  '/resources/images',
  express.static(path.join(__dirname, 'resources', 'images'))
);

app.use('/util', express.static(path.join(__dirname, 'app', 'pages', 'util')));

app.listen(7777, () => {
  console.log('listening on port 7777');
});

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'app', 'pages', 'main');

  app.use(express.static(filePath));
  res.sendFile(path.join(filePath, 'main.html'));
});

app.get('/log-in', (req, res) => {
  const filePath = path.join(__dirname, 'app', 'pages', 'log-in');

  app.use(express.static(filePath));
  res.sendFile(path.join(filePath, 'log-in.html'));
});

app.get('/sign-in', (req, res) => {
  const filePath = path.join(__dirname, 'app', 'pages', 'sign-in');

  app.use(express.static(filePath));
  res.sendFile(path.join(filePath, 'sign-in.html'));
});

app.get('/select-campaign', (req, res) => {
  const filePath = path.join(__dirname, 'app', 'pages', 'select-campaign');

  app.use(express.static(filePath));
  res.sendFile(path.join(filePath, 'select-campaign.html'));
});

app.get('/campaign-view', (req, res) => {
  const filePath = path.join(__dirname, 'app', 'pages', 'campaign-view');

  app.use(express.static(filePath));
  res.sendFile(path.join(filePath, 'campaign-view.html'));
});

app.get('/character-creation', (req, res) => {
  const filePath = path.join(__dirname, 'app', 'pages', 'character-creation');

  app.use(express.static(filePath));
  res.sendFile(path.join(filePath, 'character-creation.html'));
});

app.get('/show-characters', async (req, res) => {
  const characters = await Character.find({});
  res.send('Loading characters...');
  console.log(characters);
});

// app.get('/*', (req, res) => {
//   const filePath = path.join(__dirname, 'app', 'pages', 'main');

//   app.use(express.static(filePath));
//   res.sendFile(path.join(filePath, 'main.html'));
// });
