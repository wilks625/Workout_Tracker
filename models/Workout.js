const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [{
    type: {
      type: String,
      trim: true,
      required: 'Enter the type of exercise (resistance, cardio, etc.).',
    },
    name: {
      type: String,
      trim: true,
      required: 'Enter the name of the exercise (bicep curl, squat, bench press, etc.).'
    },
    duration: {
      type: Number,
      required: 'Enter a number'
    },
    weight: {
      type: Number
    },
    reps: {
      type: Number
    },
    sets: {
      type: Number
    },
    distances: {
      type: Number
    },
  }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
