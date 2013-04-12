var githubapi = require('github')
  , github    = new githubapi({ version: '3.0.0', timeout: 5000 })
  , magic     = require('imagemagick')
  , colors    = require('./colors.js')
  , shapes    = require('./shapes.js');

module.exports = function(user, project, callback) {

    github.repos.get({ user: user, repo: project}, function(err, result) {

        // Return error body if the API call fails for whatever reason
        if (err || !result) callback(err, null);

        // Otherwise go ahead and render the lil' guy
        magic.convert([
            '-size',        '113x122'
          , 'canvas:transparent'
          , '-fill',        colors.fill(result.language)
          , '-stroke',      colors.stroke(result.language)
          , '-strokewidth', '6'
          , '-draw',        shapes.gumdrop()
          , 'resources/beady-eyes.png', '-geometry', '+24+9', '-composite'
          , 'png:-'
        ], function(err, stdout) {
            callback(err, new Buffer(stdout, 'binary'));
        });
    });
};