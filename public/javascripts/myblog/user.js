import React from 'react';
import $ from 'jquery';

//登录模块
class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            password: '',
            newPassword: '',
            status: true
        };
    }
    getPassword(e){
        this.setState({password: e.target.value});
    }
    getNewPassword(e){
        this.setState({newPassword: e.target.value});
    }
    submit(){
        let {password, newPassword} = this.state;
        $.ajax({
            type: 'post',
            url: '/myblog/user',
            data: {password, newPassword},
            success: msg => {
                this.setState({password: '', newPassword: ''});
                alert('修改成功！');
            },
            error: msg=> {
                alert('网络错误，请重试');
            }
        });
    }
    render(){
        let {password, newPassword,status} = this.state;
        console.log(password, newPassword);
        return (
            <div>
                <p><input type="password" placeholder="原密码" value={password} onChange={this.getPassword.bind(this)}/></p>
                <p><input type="password" placeholder="新密码" value={newPassword} onChange={this.getNewPassword.bind(this)}/></p>
                <p><input type="submit" value="提交" disabled={status ? '' : 'disabled'} onClick={this.submit.bind(this)}/></p>
            </div>
        )
    }
}
export default User;