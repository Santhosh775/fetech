const express = require('express');
const mysql = require('mysql');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fe-tech'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        return;
    }
    console.log('Connected to MySQL');
});

// Configure multer for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ 
    storage: storage,
    fileFilter: function (req, file, cb) {
        const filetypes = /jpeg|jpg|png|gif/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);

        if (extname && mimetype) {
            return cb(null, true);
        } else {
            cb('Error: Images only!');
        }
    }
});

// API endpoint to add product
app.post('/api/products', upload.single('image'), (req, res) => {
  try {
      const { productName, organizationName, mrfRate, techniciansRate, distributorsRate, aboutProduct } = req.body;
      const image = req.file ? req.file.filename : null;

      // Convert rates to decimals
      const mrfRateDecimal = parseFloat(mrfRate);
      const techniciansRateDecimal = parseFloat(techniciansRate);
      const distributorsRateDecimal = parseFloat(distributorsRate);

      if (isNaN(mrfRateDecimal) || isNaN(techniciansRateDecimal) || isNaN(distributorsRateDecimal)) {
          return res.status(400).json({ message: 'Invalid rate values' });
      }

      // Insert data into MySQL
      const query = 'INSERT INTO products (productName, organizationName, mrfRate, techniciansRate, distributorsRate, aboutProduct, image) VALUES (?, ?, ?, ?, ?, ?)';
      const values = [productName, organizationName, mrfRateDecimal, techniciansRateDecimal, distributorsRateDecimal, aboutProduct, image];

      db.query(query, values, (err, result) => {
          if (err) {
              console.error('Error inserting product into database:', err.message);
              return res.status(500).json({ message: 'Failed to add product' });
          }

          res.status(200).json({ message: 'Product added successfully', productId: result.insertId });
      });
  } catch (error) {
      console.error('Error processing form data:', error);
      res.status(500).json({ message: 'Failed to add product' });
  }
});


// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
