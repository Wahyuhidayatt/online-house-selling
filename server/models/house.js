'use strict'

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

let schemaHouse = new Schema({
  title : String,
  price : Number,
  description: String,
  owner : String,
  address: String,
  image : String,
  latitude : Number,
  longitude : Number
},{
  timestamps : true
});
let House = Mongoose.model('House', schemaHouse);

module.exports = House;
