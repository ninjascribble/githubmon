var fill   = 0
  , stroke = 1
  , languages = {
    "default"   : ['#ffd5e5ff', '#ff2a7fff']
  , "javascript": ['#f0db4fff', '#323330ff']
  , "ruby"      : ['#c87358ff', '#a8222bff']
  , "java"      : ['#5281a0ff', '#f8981dff']
  , "python"    : ['#ffdb4cff', '#376a94ff']
  , "shell"     : ['#404040ff', '#07ac13ff']
  , "php"       : ['#9999ccff', '#666699ff']
  , "c"         : ['#a8b9ccff', '#1b75b3ff']
  , "c++"       : ['#f8f8f8ff', '#0645b1ff']
};

exports.fill = function(language) {
    return getColorByLanguage(language, fill);
};

exports.stroke = function(language) {
    return getColorByLanguage(language, stroke);
};

function getColorByLanguage(language, index) {
    var color = languages[language.toLowerCase()];
    return (color) ? color[index] : languages['default'][index];
}