var express = require('express');
var router = express.Router();
var regions = require('../database/data.json').regions;

/* GET home page. */
router.get('/:id', function(req, res, next) {
    const id = parseInt(req.params.id)
    for (region in regions){
        let shareable = regions[region].shareables.find(s=>s.id === id)
        if (shareable) {
            return res.json(shareable);
        }
    }
    return res.json({"message": `Shareable Not Found: ${id}`})
});

module.exports = router;

