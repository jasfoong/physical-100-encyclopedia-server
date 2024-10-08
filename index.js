const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const challengesRoute = require("./routes/challenges-routes");
const contestantsRoute = require("./routes/contestants-routes");
const challengesWonRoute = require("./routes/challenges-won-routes");
const challengesLostRoute = require("./routes/challenges-lost-routes")
const PORT = process.env.PORT || 5050;

const corsOptions = {
    origin: "https://physical100encyclopedia.netlify.app",
    methods: ['GET'],
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static("public"));

app.use("/contestants", contestantsRoute);
app.use("/challenges", challengesRoute);
app.use("/challenges-won", challengesWonRoute);
app.use("/challenges-lost", challengesLostRoute);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})