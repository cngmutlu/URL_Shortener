require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

let map_array = [];

app.post('/api/shorturl', function(req,res) {
  const originalURL = req.body;
  console.log(originalURL);
  res.json({original_url: originalURL, short_url: shortURL});
}); 


app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
