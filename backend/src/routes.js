const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../../frontend/index.html');
  res.sendFile(filePath);
  // req.send('hello worl')
});

module.exports = router