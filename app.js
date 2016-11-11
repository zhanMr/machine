'use strict';
let express = require('express');
let path = require('path');
let favicon = require('static-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let session = require('express-session');
let bodyParser = require('body-parser');

let routes = require('./routes/webapp/index');
let detail = require('./routes/webapp/detail');
let myblog_login = require('./routes/myblog/login');
let myblog_index = require('./routes/myblog/index');
let myblog_user = require('./routes/myblog/user');
let myblog_add = require('./routes/myblog/add');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

//中间件
/*app.get('/!*', (req, res, next) => {
    console.log(req.session);
   console.log('xxx');
    next();
})*/

app.use('/', routes);
app.use('/index', routes);
app.use('/detail', detail);
app.use('/myblog/login', myblog_login);
app.use('/myblog/index', myblog_index);
app.use('/myblog/user', myblog_user);
app.use('/myblog/add', myblog_add);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
   /* var err = new Error('Not Found');
    err.status = 404;
    next(err);*/
    res.redirect('/index')
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
