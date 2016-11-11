import ReactDOM  from 'react-dom';
import React from 'react';
import Login from './login';
import Index from './index';
import User from './user';
import Message from './message';
import Classify from './classify';

function reactUI(id, item){
    id = document.getElementById(id);
    if(id) ReactDOM.render(item, id);
}
reactUI('JS_Login', <Login/>);
reactUI('JS_Index', <Index/>);
reactUI('JS_User', <User/>);
reactUI('JS_Message', <Message/>);
reactUI('JS_Classify',<Classify/>);

