'use strict';
const express = require('express');
const db = require('./../util/db');
const router = express.Router();
const url = require('url');
const querystring = require('querystring');

/* GET home page. */
router.get('/', function(req, res) {
  let page = parseInt(req.query.page) || 1;
  let num = 9;
  let param = querystring.parse(url.parse(req.url).query);
  let key = param && param.key;
  let sql = key ? `select * from content where title LIKE '%${key}%' OR introduction LIKE '%${key}%'` : `select * from content order by id desc limit ${(page - 1)*num }, ${((page - 1)*num + 9)}`;
  db(sql, (err, rows, fields) => {
    res.render('webapp/index', { title: '首页' , data: rows, page: page, total: 90});
  })
});

module.exports = router;
