import React from 'react';
import $ from 'jquery';
import wangeditor from 'wangeditor';
class Message extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: ''
        }
    }
    componentDidMount(){
        this.head = new window.wangEditor('head');
        this.head.config.uploadImgUrl = '/upload';
        this.head.create();
        this.head.$txt.html('简要描述');

        this.content = new window.wangEditor('content');
        this.content.config.uploadImgUrl = '/upload';
        this.content.create();
        this.content.$txt.html('文章正文');
    }
    getMessage(){
        let head = this.head.$txt.html();
        let content = this.content.$txt.html();
        let title = this.state.title;
        $.ajax({
            type: 'post',
            url: '/myblog/add',
            data:{head, content, title},
            success: msg => {
                alert('提交成功！');
            },
            error: msg=> {
                alert('网络错误，请重试');
            }
        });
    }
    getTitle(e){
        this.setState({title: e.target.value});
    }
    render(){
        let title = this.state.title;
        return (
            <div className="message">
                <div><input type="text" value={title} onChange={this.getTitle.bind(this)} placeholder="标题"/></div>
                <div style={{width:'100%', height: '500px'}} id="head" contentEditable="true"></div>
                <div style={{width:'100%', height: '200px'}} id="content" contentEditable="true"></div>
                <div><input type="button" value="提交" onClick={this.getMessage.bind(this)}/></div>
            </div>
        );
    }
}
export default Message;