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
    //删除文章
    deleteArticle(id){
        let {data} = this.state;
        $.ajax({
            type: 'post',
            url: '/myblog/index/delete',
            data: {id},
            success: msg => {
                let arr = data.filter(item => item.id != id);
                this.setState({data: arr});
            },

        error: msg=> {
            alert('网络错误，请重试');
            }
        });
    }
    render(){
        let {data} = this.state;
        return (
            <div className="art">
                {data.map((item, index) => {
                    return (
                        <ul key={index}>
                            <li>{index + 1}</li>
                            <li><a href="">{item.title}</a></li>
                            <li onClick={this.deleteArticle.bind(this, item.id)}><a href="javascript:void(0)">删除</a></li>
                        </ul>
                    )
                })}
            </div>
        )
    }
}
export default Login;