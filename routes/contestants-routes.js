const router = require("express").Router();
const contestantsController = require("../controllers/contestants-controller")

router
    .route("/")
    .get(contestantsController.index)

router
    .route("/:id")
    .get(contestantsController.findOne)
    .put(contestantsController.update)

module.exports = router;