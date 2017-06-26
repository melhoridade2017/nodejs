let Service = function(req, res) {
    //DOM - Init
    res.locals = {
        title: 'About Page'
    };
    
    res.render('index');
};

module.exports = Service;