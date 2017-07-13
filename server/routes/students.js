'use strict';
const router = require('express').Router();
const Models = require('../../db/models');
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
      return Student.findAll({});
    })
    .then((students) => {
      res.status(201).json(students);
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
      student.update(req.body, {
        returning: true
      });
    })
    .then((newStudent) => {
      res.status(200).json(newStudent);
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
  .then(() => {
    return Student.findAll({});
  })
  .then((students) => {
    console.log('students FROM ROUTE', students[0]);
    res.status(201).json(students);
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
