var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  const host = process.env.SERVICE_URL || 'http://localhost:8000';
  res.render('game', { title: 'オンラインシューティング！', host: host });
});

module.exports = router;
