const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/chat', {useMongoClient: true});

mongoose.connection
  .once('open', () => console.log('Connected to the database localhost:3000'))
  .on('error', err => console.error(err));
