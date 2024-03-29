var express     = require('express')
  , controllers = require('./controllers')
  , http        = require('http')
  , path        = require('path')
  , app         = express();

app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
    app.use(express.errorHandler());
});

app.get('/', controllers.index);
app.get('/test', controllers.test);
app.get('/creature/:user/:project/:language.gif', controllers.creature);
app.get('/creature/:user/:project.gif', controllers.creature);

http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});
