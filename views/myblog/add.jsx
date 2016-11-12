let React = require('react');
let Layout = require('./layout');
class Index extends React.Component{
    render(){
        let {title} = this.props;
        return (
            <Layout title={title}>
                <section id="JS_Message"></section>
            </Layout>
        )
    }
}
module.exports = Index;