const File = require('../models/File');

// Controller function to upload a file
exports.uploadFile = async (req, res) => {
  try {
    const { name, size, path } = req.file;

    // Create a new file document in the database
    const file = await File.create({
      name,
      size,
      path,
      // Add other necessary fields as per your schema
    });

    res.status(201).json({ file });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to upload the file' });
  }
};

// Controller function to download a file
exports.downloadFile = async (req, res) => {
  try {
    const fileId = req.params.id;

    // Find the file document in the database
    const file = await File.findById(fileId);

    if (!file) {
      return res.status(404).json({ error: 'File not found' });
    }

    // Send the file as a response
    res.download(file.path, file.name);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to download the file' });
  }
};

// Controller function to delete a file
exports.deleteFile = async (req, res) => {
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
};
