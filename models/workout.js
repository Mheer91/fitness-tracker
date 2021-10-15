const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Please enter the type of workout!"
    },
    name: {
        type: String,
        trim: true,
        required: "Please enter workout name!"
    },
    duration: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    sets: {
        type: Number,
    },
    distance: {
        type: Number,
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;