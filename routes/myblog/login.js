'use strict';
let express = require('express');
let ctypo = require('crypto');
let router = express.Router();
let db = require('./../db');

function encrypt(str, type){
    let hash = ctypo.createHash(type);
    hash.update(str.toString());
    return hash.digest('hex');
}

router.get('/', function(req, res) {
    res.render('myblog/login', { title: '登录'});
});

//登录验证
router.post('/',(req, res) => {
    let user = req.body.user;
    let password = encrypt(req.body.password, 'sha1');
    let sql = `select * from login where username = '${user}' and password = '${password}'`;
    let success = false;
    let login = ((err, rows, fields) => {
        if(!err && rows.length){
            let time = (new Date()).getTime();
            let cache = time + 24*60*60*1000;
            let cookie = {httpOnly: true, expires: new Date(cache)};
            db(`update login set time = ${time} where username = '${user}'`, ((err, rows, fields) => {
                if(!err){
                    res.cookie('password', password, cookie);
                    res.cookie('time', time, cookie);
                    success = true;
                 }else{
                    success = false;
                }
                res.json({success});
            }))
        }else{
            res.json({success});
        }
    });
    db(sql, login);
});

module.exports = router;
