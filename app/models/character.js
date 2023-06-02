const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  characterLevel: {
    type: Number,
    required: true,
    min: 1,
    max: 20,
  },
  race: {
    type: String,
    required: true,
    enum: ['Human', 'Dwarf', 'Elf', 'Orc', 'Malit', 'Ramadriin'],
    lowercase: true,
  },
  baseClass: {
    type: String,
    required: true,
    enum: [
      'Warrior',
      'Mage',
      'Hunter',
      'Assassin',
      'Cleric',
      'Barbarian',
      'Paladin',
      'Ranger',
      'Bard',
    ],
    lowercase: true,
  },
  baseClassLevel: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
  secondClass: {
    type: String,
    enum: [
      'Warrior',
      'Mage',
      'Hunter',
      'Assassin',
      'Cleric',
      'Barbarian',
      'Paladin',
      'Ranger',
      'Bard',
    ],
    lowercase: true,
  },
  secondClassLevel: {
    type: Number,
    min: 1,
    max: 10,
  },
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;
