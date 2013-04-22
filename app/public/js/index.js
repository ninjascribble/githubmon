;(function(global) {
    "use strict";

    var creature     = document.getElementById('creature')
      , creatureForm = document.getElementById('creature-form')
      , repoField    = document.getElementById('repo')
      , matcher      = /github\.com\/([\w-_\.]*)\/([\w-_\.]*)/;

    creatureForm.addEventListener('submit', updateCreature);
    updateCreature();

    function updateCreature(evt) {

        evt && evt.stopPropagation();
        evt && evt.preventDefault();

        var matches = matcher.exec(repoField.value);

        if (matches && matches.length >= 3) {
            creature.src = ['creature', matches[1], matches[2]].join('/') + '.gif';
        }
    };
}(window));