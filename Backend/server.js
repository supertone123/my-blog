const express = require('express');
const app = express();
const { readFile } = require('fs').promises;

app.get('/', async (request, response) => {
    response.send( await readFile('index.html', 'utf8') );
    
});

// console.log("Hello")
// console.log("This is the output of our index.js file")

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'));
const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/my-blog'; // Replace with your actual MongoDB connection string

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('Error connecting to MongoDB:', err));
  mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected...');
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch(err => console.log('Error connecting to MongoDB:', err));
