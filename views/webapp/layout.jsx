let React = require('react');
let Layout = React.createClass({
    render: function(){
        return (
            <html manifest="/application.appcache">
                <head>
                    <title>{this.props.title}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <link href="/stylesheets/style.css" rel="stylesheet"/>
                    <link href="/stylesheets/wangEditor.css" rel="stylesheet"/>
                </head>
                <body>
                <header>
                    <div>
                        <ul>
                            <li><a href="/index">Home</a></li>
                            <li id="JS_Search"></li>
                        </ul>
                    </div>
                </header>
                    <div className="box">
                        {this.props.children}
                    </div>
                </body>
                <script src="/javascripts/webapp.js"></script>
            </html>
        )
    }
});
module.exports = Layout;
