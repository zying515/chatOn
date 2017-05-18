/**
 * Created by Administrator on 2017/5/13.
 */
var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/index', function(req, res,next) {
    console.log("没有找到页面");
    res.sendFile( __dirname + "/" + "views"+ "/" + "index.html" );
});

module.exports = router;
