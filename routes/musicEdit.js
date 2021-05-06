const express = require('express');
const Music = require('../model/Music');
const router = express.Router();

/* GET users listing. */
router.get('/edit/:id', function(req, res, next) {
//   res.render('MusicEdit', {title: "Musiqa o`zgartirish sahifasi"});

  Music.findById(req.params.id, (err, musics)=> {
      console.log(musics);
    res.render('musicedit', {
        title: 'musiqa o`zgartirish sahifasi',
        musics,
    })
  })
});


/* Post users listing. */
router.post('/edit', function(req, res, next) {
  console.log('yangiladi');
});



module.exports = router;
