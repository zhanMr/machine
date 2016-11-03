import React from 'react';
import $ from 'jquery';
//登录模块
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        $.ajax({
            type: 'post',
            url: '/myblog/index',
            success: msg => {
                this.setState({data: msg.data});
            },
            error: msg=> {
                alert('网络错误，请重试');
            }
        });
    }
    render(){
        let {data} = this.state;
        return (
            <div>
                {data.map(item => {
                    return (
                        <ul>
                            <li>{item.id}</li>
                            <li>{item.title}</li>
                            <li>删除</li>
                        </ul>
                    )
                })}
            </div>
        )
    }
}
export default Login;