'use strict';
let express = require('express');
let router = express.Router();
let db = require('./../util/db');

router.get('/', function(req, res) {
    res.render('myblog/classify', { title: '后台首页'});
});
router.get('/search', function(req, res) {
    db(`select * from classify order by name desc`, (err, rows, fields) => {
        console.log(rows);
        console.log(err);
        if(!err && rows && rows.length){
            res.json({data: rows});
        }
    })
});
router.post('/add', function(req, res) {
    let classify = req.body.classify;

    db(`insert into classify (name) values ('${classify}')`, (err, rows, fields) => {
        res.json({data: rows});
})
});
module.exports = router;