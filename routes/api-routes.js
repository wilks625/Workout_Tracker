const router = require("express").Router();
const Transaction = require("../models/Workout.js");
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




module.exports = router;
