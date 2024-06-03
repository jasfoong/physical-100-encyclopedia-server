const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const challengesRoute = require("./routes/challenges-routes");
const contestantsRoute = require("./routes/contestants-routes");
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/contestants", contestantsRoute);
app.use("/challenges", challengesRoute);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})