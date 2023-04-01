const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
};

app.use(function(req, res, next) {
  // res.header({"Access-Control-Allow-Origin": "https://the-fame-of-honor.herokuapp.com/"}); 
  res.header({"Access-Control-Allow-Origin": "http://localhost:3000"}); 
  // res.header({"Access-Control-Allow-Origin": "http://localhost:8080"}); 
  res.header({"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"});
  next();
});

// Add routes, both API and view
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
mongoose.set("strictQuery", false);

app.listen(PORT, function() {
  console.log(`🌎  ==> server listening on Port: ${PORT}`);
});