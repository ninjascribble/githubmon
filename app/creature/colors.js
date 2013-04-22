var fill   = 0
  , stroke = 1
  , languages = {
    "default"   : ['#ffffff', '#f8f8c8', '#d8c8b0', '#b09898', '#886080', '#403040', '#85c7f7']
  , "javascript": ['#ffffff', '#f4e9b2', '#e8d364', '#ac9f58', '#706b4c', '#343740', '#85c7f7']
  , "ruby"      : ['#ffffff', '#f5d3d9', '#ee646c', '#a54466', '#733a53', '#403040', '#85c7f7']
  , "java"      : ['#ffffff', '#f7e6c8', '#eba742', '#c2594c', '#5e354f', '#2f2733', '#85c7f7']
  , "python"    : ['#ffffff', '#e5f7c8', '#94d966', '#7e996d', '#6b7055', '#262624', '#85c7f7']
  , "shell"     : ['#ffffff', '#171e21', '#171e21', '#174a25', '#167628', '#07ac13', '#85c7f7']
  , "php"       : ['#ffffff', '#f0f0f7', '#b4afe3', '#8b72b5', '#6b486b', '#21191e', '#85c7f7']
  , "c"         : ['#ffffff', '#f7f7e1', '#b0d2d9', '#8bada2', '#486b57', '#23291f', '#85c7f7']
  , "c++"       : ['#ffffff', '#f7f7e1', '#8fb9e3', '#7288b5', '#48486b', '#1a1921', '#85c7f7']
};

module.exports = function(language) {
    var color = languages[language.toLowerCase()];
    return (color) ? color : languages['default'];
}