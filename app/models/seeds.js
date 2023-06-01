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

const characters = [
  {
    name: 'Lethnox Keturak',
    characterLevel: 12,
    race: 'Dwarf',
    baseClass: 'Paladin',
    baseClassLevel: 7,
    secondClass: 'Assassin',
    secondClassLevel: 5,
  },
  {
    name: 'Yzgart',
    characterLevel: 8,
    race: 'Orc',
    baseClass: 'Ranger',
    baseClassLevel: 8,
  },
  {
    name: 'Haotran Ridan',
    characterLevel: 14,
    race: 'Elf',
    baseClass: 'Assassin',
    baseClassLevel: 9,
    secondClass: 'Bard',
    secondClassLevel: 5,
  },
];

Character.insertMany(characters)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
