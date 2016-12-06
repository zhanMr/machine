import ReactDOM  from 'react-dom';
import React from 'react';
import Search from './search';
if(document.getElementById('JS_Search')){
    ReactDOM.render(<Search/>, document.getElementById('JS_Search'));
}

window.addEventListener('message', function(e){
    console.log(e);
}, true)