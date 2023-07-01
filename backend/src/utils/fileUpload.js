const multer = require('multer');

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads'); // Specify the destination folder for file uploads
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original filename for storing the file
  },
});

// Multer file filter
const fileFilter = (req, file, cb) => {
  // Accept only certain file types
  if (
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/png' ||
    file.mimetype === 'application/pdf'
  ) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type'), false);
  }
};

// Initialize multer upload
const upload = multer({
  storage,
  fileFilter,
});

module.exports = {
  uploadFile: upload.single('file'), // Middleware for single file upload
};
