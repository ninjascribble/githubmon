var githubapi = require('github')
  , github    = new githubapi({ version: '3.0.0', timeout: 5000 })
  , magic     = require('imagemagick')
  , colors    = require('./colors.js')
  , shapes    = require('./shapes.js');

module.exports = function(user, project, callback, lang) {

    var sprites = [
        'resources/gumdrop-normal.gif'
      , 'resources/gumdrop-jumping.gif'
      , 'resources/gumdrop-sleeping.gif'
    ];

    if (lang) {
        convert(sprites[ Math.random() * sprites.length << 0 ], lang, callback)
    }
    else {
        github.repos.get({ user: user, repo: project}, function(err, result) {

            // Return error body if the API call fails for whatever reason
            if (err || !result) callback(err, null);

            // Otherwise go ahead and render the lil' guy
            convert('resources/gumdrop-normal.gif', result.language, callback)            
        });
    }
};

function convert(sprite, language, callback) {

    var defaults = colors('default')
      , palette  = colors(language);

    magic.convert([
        sprite
      , '-fill', palette[1], '-opaque', defaults[1]
      , '-fill', palette[2], '-opaque', defaults[2]
      , '-fill', palette[3], '-opaque', defaults[3]
      , '-fill', palette[4], '-opaque', defaults[4]
      , '-fill', palette[5], '-opaque', defaults[5]
      , 'gif:-'
    ], function(err, stdout) {
        callback(err, new Buffer(stdout, 'binary'));
    });
}