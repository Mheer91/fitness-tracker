const router = require("express").Router();
const db = require("../models/workout");



router.get("/api/workouts", (req, res) => {
    db.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        }
    ])
        .then((workout) => res.json(workout))
        .catch((err) => res.json(err))
});

router.get("/api/workouts/range", (req, res) => {
    db.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        }
    ])
        .sort({ day: -1 }).limit(7)
        .then((workout) => res.json(workout))
        .catch((err) => res.json(err))
});

router.post("/api/workouts/", ({ body }, res) => {
    db.create(body)
        .then((createWorkout) => {
            res.json(createWorkout)
        })
        .catch((err) => {
            res.json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    db.findByIdAndUpdate(
        { _id: req.params.id},
        { $push: { exercises: req.body }},
        { new: true })
        .then((update) => res.json(update))
        .catch((err) => res.json(err))
});

module.exports = router;