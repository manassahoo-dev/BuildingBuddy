const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Establish MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');

    // Load all schema files from the models folder
    const modelsPath = path.join(__dirname, 'models');
    fs.readdirSync(modelsPath).forEach((file) => {
      require(path.join(modelsPath, file));
    });

    // Create collections from loaded schema files
    for (const modelName of mongoose.modelNames()) {
      mongoose.model(modelName);
      console.log(`Created collection for model: ${modelName}`);
    }
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });
