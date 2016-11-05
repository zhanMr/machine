'use strict';
let express = require('express');
let router = express.Router();
let db = require('./../util/db');

router.get('/', function(req, res) {
    console.log('哈哈');
    res.render('myblog/index', { title: '后台首页'});
});

//文章列表
router.post('/', function(req, res) {
    let sql = 'select * from content order by id desc';
    db(sql, (err, rows, fields) => {
        if(!err && rows && rows.length){
            res.json({data: rows});
        }
    })
});

//删除文章
router.post('/delete', function(req, res) {
    let sql = `delete from content where id = ${req.body.id}`;
    db(sql, (err, rows, fields) => {
        if(!err){
            res.json({data: rows})
        }else{
            res.json();
        }
    })
});
module.exports = router;
