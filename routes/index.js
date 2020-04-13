var express = require('express');
var router = express.Router();
var allData = require('../database/data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.
    json(allData);
});

module.exports = router;
