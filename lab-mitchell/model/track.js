'use strict';

const mongoose = require('mongoose');
const debug = require('debug');

const Track = mongoose.Schema({
  'speechiness': { type: Number },
  'key': { type: Number },
  'time_signature': { type: Number },
  'liveness': { type: Number },
  'loudness': { type: Number },
  'duration_ms': { type: Number },
  'danceability': { type: Number },
  'duration': { type: Number },
  'valence': { type: Number },
  'acousticness': { type: Number },
  'spotify_id': {type: String},
  'volume_number': { type: Number },
  'energy': { type: Number },
  'tempo': { type: Number },
  'instrumentalness': { type: Number },
  'mode': { type: Number },
  'number': { type: Number },
  'artist': { type: String, require: true }, //makes the field required, means body of request should have at least this
  'title': { type: String, require: true }, //makes the field required, means body of request should have at least this
}, {timestamps: true}); //adds createdAt && updatedAt properties

module.exports = mongoose.model('track', Track); //how we package up as SCHEMA that can have access to MongoDB
//pass in name of schema ('track'), and the schema (Track)
//will actually get pluralized to 'tracks', so in mongo shell we will have to refer to it as 'tracks'

// String
// Buffer
// Date
// Number
// Boolean
// Mixed
// ObjectId
// Array