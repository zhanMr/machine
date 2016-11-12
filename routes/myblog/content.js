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

module.exports = router;