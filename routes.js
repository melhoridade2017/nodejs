module.exports.set = function(app) {
    //Modulos do sistema
    app.use('/', require('./site'));
    app.use('/admin', require('./admin'));
};