var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Note = mongoose.model('Note');

router.get('/getAllNotes', function (req, res, next) {
  Note.find(function (err, notes) {
    if (err) {
      return next(err);
    }

    res.json(notes);
  });
});

router.post('/createNote', function (req, res, next) {
  var note = new Note(req.body);

  note.save(function (err, data) {
    if (err) {
      return next(err);
    }

    res.json(data);
  });
});

router.put('/editNote', function (req, res, next) {
  var note = new Note(req.body);

  Note.findByIdAndUpdate(note.id, {
    $set: {
      name: note.name,
      type: note.type,
      days: note.days,
      content: note.content
    }
  }, function (err, data) {
    if (err) {
      return next(err);
    }

    res.send(data);
  });
})

router.delete('/deleteNote/:id', function (req, res, next) {
  Note.remove({
    _id: req.params.id
  }, function (err, movie) {
    if (err) {
      return res.send(err);
    }

    res.json({ message: 'Successfully deleted' });
  });
})

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
