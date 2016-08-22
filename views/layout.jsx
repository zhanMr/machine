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
                {this.props.children}
            </body>
            </html>
        )
    }
});

module.exports = Layout;
