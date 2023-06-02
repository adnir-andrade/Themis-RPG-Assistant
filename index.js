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

// seedDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
  // const pleaseWork = JSON.parse(req.body);
  const charObject = req.body;
  console.log(`This is where it needs to work: ` + charObject.name);

  // const charObject = {
  //   name: 'Test',
  //   characterLevel: 5,
  //   race: 'human',
  //   baseClass: 'warrior',
  //   baseClassLevel: 5,
  //   secondClass: null,
  //   secondClassLevel: null,
  // };

  const realChar = new Character(charObject);

  console.log('Req: ' + req);
  // Retrieve the object data from the request
  // const characterData = req.body;
  // console.log('Character Data: ' + characterData);

  // Create a new document using the model and object data
  // const newCharacter = new Character(characterData);

  // console.log('New Character: ' + newCharacter);

  // Save the document to the database
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
