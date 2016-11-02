import React from 'react';
import $ from 'jquery';
//登录模块
class Login extends React.Component{
    render(){
        return (
            <div>
                <p><input type="text" placeholder="用户名"/></p>
                <p><input type="password" placeholder="密码"/></p>
                <p><input type="submit" value="登录"/></p>
            </div>
        )
    }
}
export default Login;