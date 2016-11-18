let React = require('react');
let Layout = require('./layout');
class Content extends React.Component{
    render(){
        let {title} = this.props;
        return (
            <Layout title={title}>
                <section id="JS_Content"></section>
            </Layout>
        )
    }
}
module.exports = Content;