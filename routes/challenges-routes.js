const router = require("express").Router();
const challengesController = require("../controllers/challenges-controller")

router
    .route("/")
    .get(challengesController.index)

router
    .route("/:id")
    .get(challengesController.findOne)
    .put(challengesController.update)

module.exports = router;