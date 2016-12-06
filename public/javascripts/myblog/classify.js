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
   /*     $.ajax({
            type: 'get',
            url: '/myblog/classify/search',
            success: msg => {
                self.setState({data: msg.data});
            },
            error: msg=> {
                alert('网络错误，请重试');
            }
        });*/
      

        let xhr = new XMLHttpRequest();
        xhr.onload = function(){
            if(xhr.readyState == 4){
                if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
                    //alert(xhr.responseText);
                    self.setState({data: JSON.parse(xhr.responseText).data});
                  
                }else{
                    alert('请求失败： ' + xhr.status);
                }
            }
        }

        xhr.onprogress = (e) => {
            console.log(e);
        }

        xhr.open('get', '/myblog/classify/search?id=1', false);
        xhr.send(null);


    }
    //增加分类
    addClassify(){
        let self = this;
        //let {data, classify} = this.state;
/*        $.ajax({
            type: 'post',
            url: '/myblog/classify/add',
            data:{classify},
            success: msg => {
                data.unshift({'name': classify});
                self.setState({data: data,classify: ''});
            },
            error: msg=> {
                alert('网络错误，请重试');
            }
        });*/
        let {data, classify} = this.state;
        let param = new FormData();
        param.append('classify', classify);
        let xhr = new XMLHttpRequest();
        xhr.onload = function(){
            if(xhr.readyState == 4){
                if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
                    alert(xhr.responseText);
                }else{
                    alert('请求失败： ' + xhr.status);
                }
            }
        }
      
        xhr.open('POST','/myblog/classify/add');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.send(`classify=${classify}`);
    }
    //删除分类
    removeClassify(id){
        let {data} = this.state;
        $.ajax({
        type: 'post',
        url: '/myblog/classify/remove',
            data:{id},
            success: msg => {
                let now = [];
                data.forEach(item => {
                    if(item.id != id) now.push(item);
                });
                this.setState({data: now});
            },
            error: msg=> {
                alert('网络错误，请重试');
            }
        });
    }
    //获取分类
    getClassify(e){
        this.setState({classify: e.target.value});
    }
    render(){
        let {data, classify} = this.state;
        return (
            <section className="classify">
               <section className="classify_left">
                    <h2>添加文章分类</h2>
                    <p><input type="text" value={classify} placeholder="请输入文章分类" onChange={this.getClassify.bind(this)}/></p>
                    <p><input type="button" value="提交" onClick={this.addClassify.bind(this)}/></p>
                </section>
                <section className="classify_right">
                    {data.map((item, key) => {
                        return (
                            <section key={key} onClick={this.removeClassify.bind(this, item.id)}><span>{key + 1}</span><span>{item.name}</span><span>x</span></section>
                        )
                    })}
                </section>
            </section>
        )
    }
}
export default Classify;