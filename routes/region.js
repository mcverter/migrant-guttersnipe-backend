var express = require('express');
var router = express.Router();
var regions = require('../database/data.json').regions;

/* GET home page. */
router.get('/:id', function(req, res, next) {
	const id = req.params.id.toLowerCase();
	res.json(regions[id]);
});

module.exports = router;

