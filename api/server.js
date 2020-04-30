const express = require('express');

const app = express();

app.get('/api/status', (req, res) => {
  res.send({ api: 'up' });
});

module.exports = app;
