var creature = require('../creature');

exports.index = function(req, res) {
    res.render('index');
};

exports.test = function(req, res) {
    res.render('test');
};

exports.creature = function(req, res) {

    var user    = req.param('user')
      , project = req.param('project')
      , lang    = req.param('language');

    creature(user, project, function(err, result) {

        if (err) {
          console.log(err);
          res.send(404);
        }
        else {
          res.type('gif');
          res.send(result);
        }
    }, lang);
};