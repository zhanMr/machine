import ReactDOM  from 'react-dom';
import React from 'react';
import Login from './login';
import Index from './index';
import User from './user';

if(document.getElementById('JS_Login')){
    ReactDOM.render(<Login/>, document.getElementById('JS_Login'));
}

if(document.getElementById('JS_Index')){
    ReactDOM.render(<Index/>, document.getElementById('JS_Index'));
}

if(document.getElementById('JS_User')){
    ReactDOM.render(<User/>, document.getElementById('JS_User'));
}
