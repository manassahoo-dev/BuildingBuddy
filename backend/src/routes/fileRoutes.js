const express = require('express');
const router = express.Router();
const multer = require('multer');
const File = require('../models/File');
const { uploadFile } = require('../utils/fileUpload');

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads'); // Specify the destination folder for file uploads
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original filename for storing the file
  },
});
const upload = multer({ storage });

// Route for uploading a file
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { filename, size, path } = req.file;

    // Create a new file document in the database
    const file = await File.create({
      filename,
      size,
      path,
      // Add other necessary fields as per your schema
    });

    res.status(201).json({ file });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to upload the file' });
  }
});

// Route for downloading a file
router.get('/:id/download', async (req, res) => {
  try {
    const fileId = req.params.id;

    // Find the file document in the database
    const file = await File.findById(fileId);

    if (!file) {
      return res.status(404).json({ error: 'File not found' });
    }

    // Send the file as a response
    res.download(file.path, file.filename);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to download the file' });
  }
});

// Route for deleting a file
router.delete('/:id', async (req, res) => {
  try {
    const fileId = req.params.id;

    // Find and remove the file document from the database
    const file = await File.findByIdAndRemove(fileId);

    if (!file) {
      return res.status(404).json({ error: 'File not found' });
    }

    // Delete the file from the file system
    // Implement the logic to delete the file from the specified path
    // You can use fs.unlinkSync() or any other method to delete the file

    res.json({ message: 'File deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete the file' });
  }
});

module.exports = router;
