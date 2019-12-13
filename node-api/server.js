const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Starting the App
const app = express();
app.use(express.json());
app.use(cors());

// Starting the DB
// mongoose.connect('mongodb://username:password@host:port/database?options...', {useNewUrlParser: true});
mongoose.connect(
  'mongodb://localhost:27017/nodeapi', 
  { useNewUrlParser: true }
  );

// After connect, register the model
requireDir('./src/models');

// const Product = mongoose.model('Product');

// Routes
app.use('/api', require('./src/routes'));


app.listen(3001);