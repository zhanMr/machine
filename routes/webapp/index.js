'use strict';
const express = require('express');
const db = require('./../util/db');
const router = express.Router();
const url = require('url');
const querystring = require('querystring');

/* GET home page. */
router.get('/', function(req, res) {
  let page = parseInt(req.query.page) || 1;
  let param = querystring.parse(url.parse(req.url).query);
  let key = param && param.key;
  let sql;
  let number = 4;
  if(key){
    sql = `select * from content where title LIKE '%${key}%' OR introduction LIKE '%${key}%'`;
  }else{
    sql = `select * from content ORDER BY id DESC limit ${(page - 1)*number}, ${page*number}`;
  }
  console.log(sql);
  db(sql, (err, row, field) => {
    db(`select COUNT(*) as Number from content`, (err, rows, fields) => {
      res.render('webapp/index', { title: '首页' , data: row, page: page, number: Math.ceil(rows[0].Number/4)});
    })
  })
})
let data = {
  'name': 'my',
  'id': 100
};
router.get('/my', function(req, res) {
  let callback = req.query.jsoncallback;
  if (callback) {
    res.end(`${callback}(${JSON.stringify(data)})`);//jsonp
  } else {
    res.end(JSON.stringify(data));//普通json
  }
})
module.exports = router;
