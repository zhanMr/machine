let React = require('react');
let Layout = require('./layout');
class Classify extends React.Component{
    render(){
        let {title, data} = this.props;
        return (
            <Layout title={title}>
                <section  id="JS_Classify"></section>
            </Layout>
        )
    }
}
module.exports = Classify;