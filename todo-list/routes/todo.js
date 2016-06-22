var express = require('express');
var router = express.Router();

toDoList = [{
  todo: 'Wash car'}, {
  todo: 'wash dog'}];


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('/');
// });
router.get('/', function(req, res, next) {
 res.render('index', {todolist: toDoList});
});

router.post('/', function(req, res, next) {
  toDoList.push(req.body);
  res.redirect('/index');
});

router.get('/index', function(req, res, next) {
  res.render('index');
});
module.exports = router;
