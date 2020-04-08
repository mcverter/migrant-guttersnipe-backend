var express = require('express');
var router = express.Router();
var jsonBlob = require('../database/data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json(jsonBlob);
});

module.exports = router;
