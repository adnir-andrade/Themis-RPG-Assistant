const mongoose = require('mongoose');

// const Character = require('./app/models/character');
const Character = require('./character');

// getting-started.js
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/themysDb');
  console.log('Mongoose Connected');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const seedling = new Character({
  name: 'Lethnox Keturak',
  characterLevel: 12,
  race: 'Dwarf',
  baseClass: 'Paladin',
  baseClassLevel: 7,
  secondClass: 'Assassin',
  secondClassLevel: 5,
});

seedling
  .save()
  .then((seedling) => {
    console.log(seedling);
  })
  .catch((err) => console.log(err));
