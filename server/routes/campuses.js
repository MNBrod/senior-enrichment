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
      res.sendStatus(400);
    });
});

router.put('/:id', (req, res, next) => {
  Campus.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((campus) => {
      return campus.update(req.body, {returning: true});
    })
    .then(newcampus => {
      res.json(newcampus);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.put('/:id/students', (req, res, next) => {
  Campus.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((campus) => {
      campus.updateStudent(req.body.student, req.body.add);
    })
    .then((campus) => {
      res.status.json(campus);
    })
    .catch(console.error);
});

router.get('/:id/students', (req, res, next) => {
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
//when changing student make sure to send newly updated campus
//in delete, make sure to return the new list of students

module.exports = router;
