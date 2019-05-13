const router = require('express').Router();
const Candy = require('../db/models/Candy');

router.get('/', async(req, res, next) => {
  try {
    res.json( await Candy.findAll());
  } catch (error) {
    next(error);
  }
});

module.exports = router;
