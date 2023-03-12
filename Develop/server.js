// require Express.js
const express = require('express');

// specify port that Express.js server will run
const PORT = process.env.PORT || 3001;

// initialize instance of Express.js
const app = express();

// require routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// middleware to parse and url encode incoming data
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

// use api routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// listen to incoming connections
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}. Happy note taking!`)
});