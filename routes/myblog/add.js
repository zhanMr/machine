'use strict';
let express = require('express');
let router = express.Router();
let db = require('./../util/db');

router.get('/', function(req, res) {
    console.log('账号管理');
    res.render('myblog/add', { title: '账号管理'});
});
router.post('/', function(req, res) {
    let head = req.body.head;
    let content = req.body.content;
    let title = req.body.title;
    let success = false;
    let sql = `insert into art(title, classify, introduction, content, time) values ('${title}','Node', '${head.replace(/\'/g,"\"")}', '${content.replace(/\'/g,"\"")}', '${(new Date()).getTime()}')`;
    console.log(sql);
    db(sql, ((err, rows, fields) => {
            console.log(err)
    if(!err){

        success = true;
    }else{
        success = false;
    }
        res.json({success});
    }))
});
module.exports = router;