let express = require('express');
let router = express.Router();

//Eu crio as rotas do site
router.get('/', require('./home/index'));

module.exports = router;