'use strict';
const express = require('express');
const router = express.Router();
const db = require('./../util/db');

//文章页
router.get('/',(req, res)=> {
    let id = parseInt(req.query.id) || 1;
    let sql = `select * from art where id = ${id}`;
    console.log(sql);
    db(sql, (err, rows, fields) => {
        if(!err && rows && rows.length){
            res.render('webapp/detail', { title: rows[0].title , data: rows[0]});
        }else{
            res.redirect('/index');
        }
    })
});



module.exports = router;
