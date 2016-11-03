let React = require('react');
let Layout = React.createClass({
    render: function(){
        return (
            <html>
            <head>
                <title>{this.props.title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link href="/stylesheets/style.css" rel="stylesheet"/>
            </head>
            <body>
            <div className="box">
                <div>{this.props.children}</div>
            </div>
            </body>
            <script src="/javascripts/myblog.js"></script>
            </html>
        )
    }
});
module.exports = Layout;
