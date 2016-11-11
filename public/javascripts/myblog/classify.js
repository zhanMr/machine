import React from 'react';
import $ from 'jquery';

//文章分类模块
class Classify extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[],
            classify: ''
        }
    }
    //初始化分类
    componentDidMount(){
        let self = this;
        $.ajax({
            type: 'get',
            url: '/myblog/classify/search',
            success: msg => {
                self.setState({data: msg.data});
            },
            error: msg=> {
                alert('网络错误，请重试');
            }
        });
    }
    //增加分类
    addClassify(){
        let self = this;
        let {data, classify} = this.state;
        console.log(classify);
        $.ajax({
            type: 'post',
            url: '/myblog/classify/add',
            data:{classify},
            success: msg => {
                data.unshift({'name': classify});
                self.setState({data: data});
            },
            error: msg=> {
                alert('网络错误，请重试');
            }
        });
    }
    getClassify(e){
        this.setState({classify: e.target.value});
    }
    render(){
        let {data, classify} = this.state;
        return (
            <div>
                <p>
                    <input type="text" value={classify} placeholder="请输入文章分类" onChange={this.getClassify.bind(this)}/>
                    <input type="button" value="提交" onClick={this.addClassify.bind(this)}/>
                </p>
                {data.map((item, key) => {
                    return (
                        <div key={key}>{item.name}</div>
                    )
                })}
            </div>
        )
    }
}
export default Classify;