const express = require('express');
require('dotenv').config()
const { use } = require('./routes');
const router = require('./routes');

const app = express()
const PORT = process.env.PORT

app.use(express.static('frontend'));
app.use('/', router)

app.listen(PORT, function(error){
  if (error) {
    console.log('Something went wrong', error)
  } else {
    console.log(`Server is listening to http://localhost:${PORT}`)
  }
})
