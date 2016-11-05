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
                <header>
                    <ul>
                        <li><a href="/index">首页</a></li>
                    </ul>
                </header>
                    <div className="box">

                    <div>{this.props.children}</div>
                    </div>
                </body>
                <script src="/javascripts/login_bundle.js"></script>
            </html>
        )
    }
});
module.exports = Layout;
