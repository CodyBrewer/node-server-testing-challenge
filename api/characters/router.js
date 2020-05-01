const router = require('express').Router();

router.get('/status', (req, res) => {
  res.send({ charactersRouter: 'up' });
});

module.exports = router;
