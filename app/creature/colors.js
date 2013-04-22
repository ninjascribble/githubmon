var fill   = 0
  , stroke = 1
  , languages = {
    "default"   : ['#ffffff', '#f8f8c8', '#d8c8b0', '#b09898', '#886080', '#403040', '#85c7f7']
  , "javascript": ['#ffffff', '#f4e9b2', '#e8d364', '#ac9f58', '#706b4c', '#343740', '#85c7f7']
  , "ruby"      : ['#ffffff', '#f5d3d9', '#ee646c', '#a54466', '#733a53', '#403040', '#85c7f7']
  , "java"      : ['#ffffff', '#f7e6c8', '#eba742', '#c2594c', '#5e354f', '#2f2733', '#85c7f7']
  , "python"    : ['#ffffff', '#376a94', '#000000', '#000000', '#000000', '#000000', '#85c7f7']
  , "shell"     : ['#ffffff', '#07ac13', '#000000', '#000000', '#000000', '#000000', '#85c7f7']
  , "php"       : ['#ffffff', '#666699', '#000000', '#000000', '#000000', '#000000', '#85c7f7']
  , "c"         : ['#ffffff', '#1b75b3', '#000000', '#000000', '#000000', '#000000', '#85c7f7']
  , "c++"       : ['#ffffff', '#0645b1', '#000000', '#000000', '#000000', '#000000', '#85c7f7']
};

module.exports = function(language) {
    var color = languages[language.toLowerCase()];
    return (color) ? color : languages['default'];
}