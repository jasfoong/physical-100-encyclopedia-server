const knex = require("knex")(require("../knexfile"));

const challengesLostByContestant = async (req, res) => {
    try {
        const { id } = req.params;

        const challengesLost = await knex("challenges_contestants")
            .join("challenges", "challenges_contestants.challenge_id", "=", "challenges.id")
            .select("challenges.id", "challenges.name")
            .where({
                "challenges_contestants.contestant_id": id,
                "challenges_contestants.won": false
            })

        res.status(200).json(challengesLost)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: `Error retrieving challenges lost by contestant with id ${id}`
        })
    }
}

module.exports = {
    challengesLostByContestant
}