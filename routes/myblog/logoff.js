'use strict';
let express = require('express');
let router = express.Router();

router.get('/', function(req, res) {
    req.session.destroy();
    res.redirect('/myblog/login');
});
module.exports = router;