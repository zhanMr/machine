'use strict';
const express = require('express');
const path = require('path');
const favicon = require('static-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');

const routes = require('./routes/webapp/index');
const detail = require('./routes/webapp/detail');
const login = require('./routes/myblog/login');
const myblog_index = require('./routes/myblog/index');
const user = require('./routes/myblog/user');
const add = require('./routes/myblog/add');
const content = require('./routes/myblog/content');
const classify = require('./routes/myblog/classify');
const logoff =  require('./routes/myblog/logoff');

const app = express();

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


app.use(session({
    secret: 'mysession',
    cookie:{
        maxAge:60 * 1000
    }
}));
//中间件
app.get(/myblog/, (req, res, next) =>{
    let user = req.session;
    let loginUrl = '/myblog/login';
    let isLogin = req.url === loginUrl;
    console.log(req.session);
    if(req.session.user){
        isLogin ? res.redirect('/myblog/index') : next();
    }else{
        isLogin ? next() : res.redirect(loginUrl);
    }
})


app.use('/', routes);
app.use('/index', routes);
app.use('/detail', detail);
app.use('/myblog/login', login);
app.use('/myblog/index', myblog_index);
app.use('/myblog/user', user);
app.use('/myblog/add', add);
app.use('/myblog/content', content);
app.use('/myblog/classify', classify);
app.use('/myblog/logoff', logoff);

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
