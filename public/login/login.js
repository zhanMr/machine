import React from 'react';
import $ from 'jquery';

//登录模块
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: '',
            password: '',
            status: true
        };
    }
    getUser(e){
        this.setState({user: e.target.value});
    }
    getPassword(e){
        this.setState({password: e.target.value});
    }
    submit(){
        let {user, password} = this.state;
        //this.setState({status: false});
        $.ajax({
            type: 'post',
            url: '/login',
            data: {user, password},
            success: msg => {
                if(msg.success) location.href = '/index';

            },
            error: msg=> {
                alert('网络错误，请重试');

            }
        });
    }
    render(){
        let {user, password, status} = this.state;
        return (
            <div>
                <p><input type="text" placeholder="用户名" value={user} onChange={this.getUser.bind(this)}/></p>
                <p><input type="password" placeholder="密码" value={password} onChange={this.getPassword.bind(this)}/></p>
                <p><input type="submit" value="登录" disabled={status ? '' : 'disabled'} onClick={this.submit.bind(this)}/></p>
            </div>
        )
    }
}
export default Login;