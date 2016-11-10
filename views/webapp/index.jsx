const React = require('react');
const Layout = require('./layout');
const Page = require('./page');

class Index extends React.Component{
    render(){
        let {data, title, page} = this.props;
        console.log('data', data.length);
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
                    </div>
                    <Page {...this.props}/>
                </div>
            </Layout>
        )
    }
}
module.exports = Index;