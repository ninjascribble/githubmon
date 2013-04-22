var githubapi  = require('github')
  , github     = new githubapi({ version: '3.0.0', timeout: 5000 })
  , magic      = require('imagemagick')
  , colors     = require('./colors.js')
  , shapes     = require('./shapes.js')
  , one_week   = 7 * 24 * 60 * 60 * 1000
  , four_weeks = 4 * one_week
  , sprites    = [
        'resources/gumdrop-normal.gif'
      , 'resources/gumdrop-jumping.gif'
      , 'resources/gumdrop-sleeping.gif'
    ];

module.exports = function(user, project, callback, lang) {

    var sprite = sprites[0]
      , now    = Date.now()
      , then   = 0
      , diff   = 0;

    if (lang) {
        convert(sprites[ Math.random() * sprites.length << 0 ], lang, callback)
    }
    else {
        github.repos.get({ user: user, repo: project}, function(err, result) {

            // Return error body if the API call fails for whatever reason
            if (err || !result || result.code == 404) callback(err, null);

            then = new Date(result.updated_at).getTime();
            diff = now - then;

            // Active projects are jumping for joy!
            if (diff < one_week) {
                sprite = sprites[1]
            }

            // Inactive projects are sleeping...
            else if (diff > four_weeks) {
                sprite = sprites[2];
            }

            // Otherwise go ahead and render the lil' guy
            convert(sprite, result.language, callback)            
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