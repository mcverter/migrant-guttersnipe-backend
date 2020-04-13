var express = require('express');
var router = express.Router();
var regions = require('../database/data.json').regions;

/* GET home page. */
router.get('/:id', function(req, res, next) {
    const bid = req.query.id;
    const id = parseInt(req.params.id)
        console.log('hello get shareable')
    for (region in regions){
        let shareable = regions[region].shareables.find(s=>s.id === id)
        if (shareable) {
            res.json(shareable);
        }
    }
    res.json({"message": `Shareable Not Found: ${id}`})
});

module.exports = router;

