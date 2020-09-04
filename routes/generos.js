let express = require('express');
let router = express.Router();
let generosCont = require("../controllers/generosController");


router.get('/', generosCont.index)
router.get('/:genId', generosCont.porId)


module.exports = router