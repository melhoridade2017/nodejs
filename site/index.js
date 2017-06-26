let express = require('express');
let router = express.Router();

//Eu crio as rotas do site
router.get('/', require('./home/index'));
router.get('/about', require('./about/index'));
router.get('*', function(req, res){
  res.render('errors/404');
});

module.exports = router;