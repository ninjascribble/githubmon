var magic  = require('imagemagick');

module.exports = function(fill, stroke, callback) {

    fill   = fill   || '#fff';
    stroke = stroke || '#000';

    magic.convert([
        '-size',        '113x122'
      , 'canvas:transparent'
      , '-fill',        fill
      , '-stroke',      stroke
      , '-strokewidth', '6'
      , '-draw',        'path "M 56,56 m 0,60 q 60,0 50,-50 t -50,-50 -50,50 50,50 z"'
      , 'resources/beady-eyes.png', '-geometry', '+24+9', '-composite'
      , 'png:-'
    ], function(err, stdout) {
        callback(err, new Buffer(stdout, 'binary'));
    });
};