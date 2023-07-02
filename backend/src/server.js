const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileRoutes = require('./routes/fileRoutes');

const app = express();
const port = 3000; // Set the desired port number

app.use(cors());

mongoose.connect(
  'mongodb+srv://root:WsuPmKTarm8X1NOS@cluster0.9ewudev.mongodb.net/?retryWrites=true&w=majority'
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));
db.once('open', () => {
  console.log('Connected to MongoDB Database');
});

app.use('/api/files', fileRoutes);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
