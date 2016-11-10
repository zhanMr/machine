let React = require('react');
class Page extends React.Component{
    render(){
        let {page, number} = this.props;
        let start = 1;
        let arr = [];
        if(number > 6){
            if(page + 5 >= number){
                start = number - 5;
            }else{
                start = page;
            }
            for(let i = start; i <= start + 5; i++) arr.push(i);
        }else{
            for(let i = start; i <= number; i++) arr.push(i);
        }
        return(
            <ul className="page">
                {page > 1 && <li><a href={`/index?page=${page - 1}`}>上一页</a></li>}
                {arr.map(item => {
                    return (
                        <li className={page == item ? 'active' : ''}><a href={`/index?page=${item}`}>{item}</a></li>
                    )
                })}
                {page < number && <li><a href={`/index?page=${page + 1}`}>下一页</a></li>}
            </ul>
        )
    }
}
module.exports = Page;