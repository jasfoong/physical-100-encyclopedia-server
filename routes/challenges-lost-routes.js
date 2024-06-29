const router = require("express").Router();
const challengesLostController = require("../controllers/challenges-lost-controller")

router
    .route("/:id")
    .get(challengesLostController.challengesLostByContestant)

module.exports = router;