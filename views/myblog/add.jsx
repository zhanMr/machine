let React = require('react');
let Layout = require('./layout');
class Index extends React.Component{
    render(){
        let {title} = this.props;
        return (
            <Layout title={title}>
                <div id="JS_Message"></div>
            </Layout>
        )
    }
}
module.exports = Index;