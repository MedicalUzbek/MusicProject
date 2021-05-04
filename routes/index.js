var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const musics = [
    {
      id: 1,
      name: 'Sevinch',
      singer: "zo`r",
      comments: "norm"
    },
    {
      id: 2,
      name: 'Sevinch2',
      singer: "zo`r2",
      comments: "norm2"
    },
    {
      id: 3,
      name: 'Sevinch3',
      singer: "zo`r3",
      comments: "norm3"
    },
  ]
  res.render('index', { title: 'Bosh sahifa', musics });

});

module.exports = router;
