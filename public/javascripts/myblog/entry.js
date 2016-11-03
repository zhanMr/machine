import ReactDOM  from 'react-dom';
import React from 'react';
import Login from './login';
import Index from './index';

if(document.getElementById('JS_Login')){
    ReactDOM.render(<Login/>, document.getElementById('JS_Login'));
}

if(document.getElementById('JS_Index')){
    ReactDOM.render(<Index/>, document.getElementById('JS_Index'));
}
