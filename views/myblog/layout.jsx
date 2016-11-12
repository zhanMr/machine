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
                    <header id="JS_Header">
                        <h1>后台管理系统</h1>
                    </header>
                    <section className="box">
                        <section className="left" id="JS_Nav">
                            <ul>
                                <li><a href="content">文章列表</a></li>
                                <li><a href="add">添加文章</a></li>
                                <li><a href="classify">文章分类</a></li>
                                <li><a href="user">密码修改</a></li>
                                <li><a href="">注销</a></li>
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
