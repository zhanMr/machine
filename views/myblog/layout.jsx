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
                    <section className="content">
                        <section className="left">
                            <ul>
                                <li><a href="">文章列表</a></li>
                                <li><a href="add">新增文章</a></li>
                                <li><a href="">留言查看</a></li>
                                <li><a href="user">账号管理</a></li>
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
