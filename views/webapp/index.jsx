let React = require('react');
let Layout = require('./layout');
class Index extends React.Component{
    render(){
        let {data, title} = this.props;
        return (
            <Layout title={title}>
                <div className="container">
                    <div className="art">
                        {data.map((item, key) => {
                            return (
                                <article>
                                    <h2><a href={`/detail?id=${item.id}`}>{item.title}</a></h2>
                                    <p className="time">2016/11/6</p>
                                    <p className="introduction">{item.introduction}</p>
                                    <p className="read"><a href={`/detail?id=${item.id}`}>Read More&gt;&gt;</a></p>
                                </article>
                            )
                        })}
                        {data.map((item, key) => {
                            return (
                                <article>
                                    <h2><a href={`/detail?id=${item.id}`}>{item.title}</a></h2>
                                    <p className="time">2016/11/6</p>
                                    <p className="introduction">{item.introduction}</p>
                                    <p class="read"><a href={`/detail?id=${item.id}`}>Read More&gt;&gt;</a></p>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </Layout>
        )
    }
}
module.exports = Index;