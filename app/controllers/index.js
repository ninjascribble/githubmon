var creature = require('../creature');

exports.index = function(req, res) {
    res.render('index');
};

exports.creature = function(req, res) {

    var user = req.param('user')
      , project = req.param('project');

    creature(user, project, function(err, result) {

        if (err) {
          res.send(404);
        }
        else {
          res.type('png');
          res.send(result);
        }
    });
};