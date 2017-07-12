'use strict';
const router = require('express').Router();
const Models = require('../../db/models');
console.log(Models, 'HERE');
const Student = Models.Student;

router.get('/', (req, res, next) => {
  Student.findAll({})
    .then(data => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.post('/', (req, res, next) => {
  Student.create(req.body)
    .then((val) => {
      res.status(201).json(val);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.get('/:id', (req, res, next) => {
  Student.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((student) => {
      res.status(200).json(student);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.put('/:id', (req, res, next) => {
  Student.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((student) => {
      student.update(req.body);
    })
    .then((numUpdated) => {
      res.status(200).send('Updated ' + numUpdated + ' students');
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.delete('/:id', (req, res, next) => {
  Student.destroy({
      where: {
        id: req.params.id
      }
    })
    .then((result) => {
      if (result[0] === 0) {res.sendStatus(404);}
      else {
        res.status(204);
        Student.findAll({})
        .then(students => res.json(students));
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.put('/:id/campus', (req, res, next) => {
  Student.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((student) => {
      student.update(req.body);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

module.exports = router;
