const router = require("express").Router();
const db = require('../models');
const path = require('path');

// get workouts
router.get('/api/workouts', (req, res) => {
  db.Workout.aggregate([
    { $addFields: { totalDuration: { $sum: '$exercises.duration' } } }
  ])
    .then((workoutDB) => {
      res.json(workoutDB);
    })
    .catch((err) => {
      res.json(err);
    });
});

// get total duration of a workout
router.get('/api/workouts/range', (req, res) => {
  db.Workout.aggregate([
    { $addFields: { totalDuration: { $sum: '$exercises.duration' } } }
  ])
    .then((workoutDB) => {
      res.json(workoutDB);
    })
    .catch((err) => {
      res.json(err);
    });
});

// post new workout
router.post('/api/workouts', (req, res) => {
  db.Workout.create({})
    .then((workoutDB) => {
      res.json(workoutDB);
    })
    .catch((err) => {
      res.json(err);
    });
});

// update workouts
router.put('/api/workouts/:id', ({ body, params }, res) => {
  db.Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then((workoutDB) => {
      res.json(workoutDB);
    })
    .catch((err) => {
      res.json(err);
    });
});


module.exports = router;
