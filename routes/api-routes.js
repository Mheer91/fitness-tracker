const db = require("../models/workout");
const router = require("express").Router();


db.find({}).then(function (res) {
    console.log("Checking if db is populated");
    if (res.length === 0) {
        console.log("DB is empty");
        require("../seeders/seed");
    }
});

module.exports = router;