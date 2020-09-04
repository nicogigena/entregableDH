let express = require('express');
let router = express.Router();
let bandasCont = require("../controllers/bandasController");


router.get('/', bandasCont.index)

router.get('/id/:id', bandasCont.porId);


module.exports = router