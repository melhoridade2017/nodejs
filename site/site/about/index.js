let Service = function(req, res) {
    //DOM - Init
    res.locals = {
        title: 'Bem vindo ao Michael Lands'
    };
    
    res.render('about/index');
};

module.exports = Service;