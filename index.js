const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const postRoute = require('./routes/postRoute');

dotenv.config()
const app = express();
const port = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware to allow JSON and URL encoded data to be sent to the server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route for posts
app.use('/posts', postRoute);

app.get('/', (req, res) => {
  res.send('Kontinentalist Intern Assignment Task 2: Demonstrate understanding of REST conventions');
})

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to the database');
    app.listen(port, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((err) => {
    console.log('Error connecting to the database', err);
  });
