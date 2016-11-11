let React = require('react');
let Layout = require('./layout');
class Index extends React.Component{
    render(){
        let {title} = this.props;
        return (
            <html>
            <head>
                <title>{this.props.title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link href="/stylesheets/myblog.css" rel="stylesheet"/>
            </head>
            <body className="body">
               <div id="JS_Login" className="login"></div>
            </body>
            <script src="/javascripts/myblog.js"></script>
            </html>
        )
    }
}
module.exports = Index;