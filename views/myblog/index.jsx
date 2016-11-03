let React = require('react');
let Layout = require('./layout');
class Index extends React.Component{
    render(){
        let {title, data} = this.props;
        return (
            <Layout title={title}>
                <div id="JS_Index"></div>
            </Layout>
        )
    }
}
module.exports = Index;