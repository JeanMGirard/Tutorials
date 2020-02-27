var express = require('express');
var router = express.Router();
var matteoRouter = require("./matteo");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.use("/matteo", matteoRouter);

module.exports = router;
