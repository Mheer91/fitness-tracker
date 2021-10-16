const db = require("../models/workout");
const router = require("express").Router();


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
    .sort({ day: -1}).limit(7)
    .then((workout) => res.json(workout))
    .catch((err) => res.json(err))
});

router.post("/api/workouts", (req, res) => {
    db.create()
        .then((workout) => {
            res.json(workout);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    db.findByIdAndUpdate({
        _id: req.params.id
    },
        {
            $push: {
                exercises: req.body
            }
        })
        .then((update) => res.json(update))
        .catch((err) => res.json(err))
});

module.exports = router;