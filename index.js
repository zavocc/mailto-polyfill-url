const express = require('express');
const app = express();
const port = 3000;

const base_url = 'http://localhost';

app.get('/mailto', (req, res) => {
  const email = req.query.email;
  if (!email) {
    return res.status(400).send('Email parameter is required.');
  }

  // Log all query parameters
  //console.log('Query parameters:', req.query);

  // Redirect to mailto URL
  res.redirect(`mailto:${email}`);
});

app.listen(port, () => {
  console.log(`Server is running at ${base_url}:${port}`);
});
