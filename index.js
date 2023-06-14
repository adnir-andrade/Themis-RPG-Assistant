'use strict';

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

const seedDb = async () => {
  await Character.deleteMany({});
};

//seedDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  '/assets/resources/css',
  express.static(path.join(__dirname, 'assets', 'resources', 'css'))
);

app.use(
  '/assets/resources/icons',
  express.static(path.join(__dirname, 'assets', 'resources', 'icons'))
);

app.use(
  '/assets/resources/images',
  express.static(path.join(__dirname, 'assets', 'resources', 'images'))
);

app.use('/util', express.static(path.join(__dirname, 'app', 'pages', 'util')));

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

app.post('/store-character', async (req, res) => {
  const charObject = req.body;

  const realChar = new Character(charObject);

  realChar
    .save()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(7777, () => {
  console.log('listening on port 7777');
});

app.get('/recover-characters', async (req, res) => {
  try {
    const characters = await Character.find();
    res.json(characters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error retrieving characters' });
  }
});
