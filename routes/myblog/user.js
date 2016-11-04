'use strict';
let express = require('express');
let router = express.Router();
let db = require('./../util/db');
let tool = require('./../util/tool');
let util = new tool();

router.get('/', function(req, res) {
    console.log('账号管理');
   res.render('myblog/user', { title: '账号管理'});
});
router.post('/', function(req, res) {
    let password = util.encrypt(req.body.password, 'sha1');
    let sql = `select * from  login where username = 'zz' and password = '${password}'`;
    console.log(sql);
    db(sql, (err, rows, fields) => {
        if(!err && rows.length){
            db(`update login set password = '${util.encrypt(req.body.newPassword, 'sha1')}' where username = 'zz'`, (err, rows, fields) => {
                if(!err){
                    res.json({success: true})
                }
            })
        }
    })

});

module.exports = router;