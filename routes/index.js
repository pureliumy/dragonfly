var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {cache: true, title: 'Express One'})
})

module.exports = router
