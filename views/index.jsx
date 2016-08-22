let React = require('react');
let Layout = require('./layout');
class Index extends React.Component{
    render(){
        let {data, title} = this.props;
        return (
            <Layout title={title}>
                <div className="container">
                    <div className="left">
                        {data.map((item, key) => {
                            return (
                                <article>
                                    <h2><a href={`/detail?id=${item.id}`}>{item.title}</a></h2>
                                    <p className="introduction">{item.introduction}</p>
                                    <p className="read"><a href={`/detail?id=${item.id}`}>阅读全文</a></p>
                                </article>
                            )
                        })}
                    </div>
                    <div className="right"></div>
                </div>
            </Layout>
        )
    }
}

module.exports = Index;