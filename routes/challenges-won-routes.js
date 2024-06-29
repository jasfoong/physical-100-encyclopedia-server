const router = require("express").Router();
const challengesWonController = require("../controllers/challenges-won-controller")

router
    .route("/:id")
    .get(challengesWonController.challengesWonByContestant)

module.exports = router;