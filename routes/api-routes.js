const db = require("../models/workout");
const router = require("express").Router();


// db.find({}).then(function (res) {
//     console.log("Checking if db is populated");
//     if (res.length === 0) {
//         console.log("DB is empty");
//         require("../seeders/seed");
//     }
// });

router.get("/api/workouts", (req, res) => {
    db.find().then((workouts) => res.json(workouts)).catch((err) => res.json(err));
});

module.exports = router;