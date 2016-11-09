import React from 'react';
import $ from 'jquery';

//搜索模块
class Search extends React.Component{
    searchArt(e){
        if(e.keyCode == 13){
            /*let key = e.target.value;
            $.ajax({
                type: 'post',
                url: '/search',
                data: {key},
                success: msg => {
                    //if(msg.success) location.href = '/myblog/index';
                },
                error: msg=> {
                    alert('网络错误，请重试');
                }
            });*/
            location.href = '/index?key=' + e.target.value;
        }
    }
    render(){
        return (
            <input type="search" onKeyUp={this.searchArt.bind(this)}/>
        )
    }
}
export default Search;