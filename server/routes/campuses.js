const router = require('express').Router();
const Models = require('../../db/models');
const Campus = Models.Campus;
const Student = Models.Student;

router.get('/', (req, res, next) => {
  Campus.findAll({})
    .then(data => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.get('/:id', (req, res, next) => {
  Campus.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((campus) => {
      res.status(200).json(campus);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.post('/', (req, res, next) => {
  Campus.create(req.body)
    .then((campus) => {
      res.status(201).json(campus);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.put('/:id', (req, res, next) => {
  Campus.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((campus) => {
      campus.update(req.body);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.get('/:id/students', (req, res, next) => {
  console.log(req.params.id);
  Campus.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((campus) => {
      if (!campus) res.sendStatus(404);
      campus.getStudents({
          where: {
            campusId: req.params.id
          }
        })
        .then((students) => {
          res.json(students);
        });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

module.exports = router;
