var renderer = require('../shapes/gumdrop.js');

exports.index = function(req, res){

    var model = {
        src0: null,
        src1: null,
        src2: null
    }

    renderer('#ffd5e5', '#ff2a7f', function(err, result) {

        console.log(err);
        model.src0 = result;

        renderer('#d5f6ff', '#3aacc9', function(err, result) {

            model.src1 = result;

            renderer('#d7f4d7', '#7c916f', function(err, result) {

                model.src2 = result;
                res.render('index', model);
            })
        })
    });
};