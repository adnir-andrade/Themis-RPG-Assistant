'use strict';

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
    enum: ['human', 'dwarf', 'elf', 'orc', 'malit', 'ramadriin'],
    lowercase: true,
  },
  baseClass: {
    type: String,
    required: true,
    enum: [
      'warrior',
      'mage',
      'hunter',
      'assassin',
      'cleric',
      'barbarian',
      'paladin',
      'ranger',
      'bard',
      null,
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
      'warrior',
      'mage',
      'hunter',
      'assassin',
      'cleric',
      'barbarian',
      'paladin',
      'ranger',
      'bard',
      '',
      null,
    ],
    lowercase: true,
    default: null,
  },
  secondClassLevel: {
    type: Number,
    min: 1,
    max: 10,
    default: null,
  },
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;
