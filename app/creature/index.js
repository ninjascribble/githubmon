var github = require('github')
  , magic  = require('imagemagick')
  , colors = require('./colors.js')
  , shapes = require('./shapes.js');

module.exports = function(user, project, callback) {

    magic.convert([
        '-size',        '113x122'
      , 'canvas:transparent'
      , '-fill',        colors.fill()
      , '-stroke',      colors.stroke()
      , '-strokewidth', '6'
      , '-draw',        shapes.gumdrop()
      , 'resources/beady-eyes.png', '-geometry', '+24+9', '-composite'
      , 'png:-'
    ], function(err, stdout) {
        callback(err, new Buffer(stdout, 'binary'));
    });
};