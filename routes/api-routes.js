const db = require("../models/workout");
const router = require("express").Router();


router.get("/api/workouts", (req, res) => {
    db.find().then((workouts) => res.json(workouts)).catch((err) => res.json(err));
});

router.get("/api/workouts/range", (req, res) => {
    db.find().then((workouts) => res.json(workouts)).catch((err) => res.json(err));
})

router.post("/api/workouts", (req, res) => {
    console.log(req.body)
    db.create()
    .then((workout) => {
        res.json(workout);
    })
    .catch((err) => {
        res.json(err);
    });
});

module.exports = router;