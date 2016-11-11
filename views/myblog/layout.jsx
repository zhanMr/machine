let React = require('react');
let Layout = React.createClass({
    render: function(){
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <link href="/stylesheets/myblog.css" rel="stylesheet"/>
                </head>
                <body>
                    <header>
                        <h1>后台管理系统</h1>
                    </header>
                    <section className="box">

                        <section className="left">
                            <h1>后台管理系统</h1>
                            <ul>
                                <li><a href="content">List</a></li>
                                <li><a href="add">Add</a></li>
                                <li><a href="classify">Classify</a></li>
                                <li><a href="user">User</a></li>
                            </ul>
                        </section>
                        <section className="right">
                            {this.props.children}
                        </section>
                    </section>
                </body>
                <script src="/javascripts/myblog.js"></script>
            </html>
        )
    }
});
module.exports = Layout;
