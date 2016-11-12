let React = require('react');
let Layout = require('./layout');
class Content extends React.Component{
    render(){
        let {title, data} = this.props;
        return (
            <Layout title={title}>
                <section id="JS_Content"></section>
                <div className="content" style={{display:'none'}}>
                    {data.map(item => {
                        return (
                            <section>
                                <h2>{item.title}</h2>
                                <div dangerouslySetInnerHTML={{__html: item.introduction}}></div>
                            </section>
                        )
                    })}
                </div>
            </Layout>
        )
    }
}
module.exports = Content;