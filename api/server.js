const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const charactersRouter = require('./characters/router.js');

const app = express();

// Global Middleware
app.use(helmet());
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/characters', charactersRouter);

app.get('/api/status', (req, res) => {
  res.send({ api: 'up' });
});

module.exports = app;
