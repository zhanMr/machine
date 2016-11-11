let React = require('react');
let Layout = require('./layout')

class Index extends React.Component{
    render(){
        let {data, title} = this.props;
        return (
            <Layout title={title}>
                <div className="container">
                    <div className="left">
                        <article>
                            <h2>{data.title}</h2>
                            <div dangerouslySetInnerHTML={{__html: data.content}}></div>
                        </article>
                    </div>
                    <div className="right"></div>
                </div>
            </Layout>
        )
    }
}
module.exports = Index;