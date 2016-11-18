import React from 'react';
import $ from 'jquery';
import Page from './Page';
class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            data:[]
        }
    }
    componentDidMount(){
        $.ajax({
            type: 'post',
            url: '/myblog/content',
            data:{page: 1},
            success: msg => {
                this.setState({data: msg.data})
            },
            error: msg=> {
                alert('网络错误，请重试');
            }
        });
    }
    time(date){
        date = new Date(date);
        return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    }
    render(){
        let data = this.state.data;
        return (
            <div className="content">
                {data.map((item, key) => {
                    return (
                        <section key={key}>
                            <h2>{item.title}</h2>
                            <p className="time">{item.classify} {this.time(item.time)}</p>
                            <div className="introduction" dangerouslySetInnerHTML={{__html: item.introduction}}></div>
                            <p className="read"><a href="">阅读</a><span>|</span><a href="">编辑</a><span>|</span><a href="">删除</a></p>
                        </section>
                    )
                })}
                <Page number={4} page = {1}/>
            </div>
        );
    }
}
export default Content;