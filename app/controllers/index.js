var renderer = require('../shapes/gumdrop.js')
  , github = 'https://github.com/';

exports.index = function(req, res) {
    res.render('index');
}

exports.creature = function(req, res) {

    var user = req.param('user')
      , project = req.param('project')
      , path = github + user + '/' + project;

    console.log(path);

    renderer('#ffd5e5', '#ff2a7f', function(err, result) {
        res.type('png');
        res.send(result);
    });
};