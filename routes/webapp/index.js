'use strict';
let express = require('express');
let db = require('./../util/db');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  let page = parseInt(req.query.page) || 1;
  let num = 9;
  let sql = 'select * from content order by id desc limit ' + (page - 1)*num + ',' + ((page - 1)*num + 9);
  db(sql, (err, rows, fields) => {
    res.render('index', { title: '首页' , data: rows, page: page, total: 90});
  })
});

module.exports = router;
