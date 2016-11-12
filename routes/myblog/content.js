'use strict';
let express = require('express');
let router = express.Router();
let db = require('./../util/db');

router.get('/', function(req, res) {
    db(`select * from content order by id desc`, (err, rows, fields) => {
        if(!err && rows && rows.length){
            res.render('myblog/content', { title: '文章列表', data: rows});
        }
    })

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