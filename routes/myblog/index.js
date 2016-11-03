'use strict';
let express = require('express');
let router = express.Router();
let db = require('./../util/db');

router.get('/', function(req, res) {
    let sql = 'select * from content order by id desc';
    db(sql, (err, rows, fields) => {
        if(!err && rows && rows.length){
            console.log(rows);
            res.render('myblog/index', { title: '后台首页', data: rows});
        }
    })
});
module.exports = router;
