'use strict';
let express = require('express');
let router = express.Router();
let db = require('./../util/db');

router.get('/', function(req, res) {
    res.render('myblog/content', { title: '文章列表'});
});

router.post('/', function(req, res) {
    let page = parseInt(req.body.page) || 1;
    let number = 4;
    let sql = `select * from art ORDER BY id DESC limit ${(page - 1)*number}, ${page*number}`;
    db(sql, (err, row, field) => {
        res.json({data: row})
    })
});


module.exports = router;