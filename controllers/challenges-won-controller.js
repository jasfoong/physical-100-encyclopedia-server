const knex = require("knex")(require("../knexfile"));

const challengesWonByContestant = async (req, res) => {
    try {
        const { id } = req.params;

        const challengesWon = await knex("challenges_contestants")
            .join("challenges", "challenges_contestants.challenge_id", "=", "challenges.id")
            .select("challenges.id", "challenges.name")
            .where({
                "challenges_contestants.contestant_id": id,
                "challenges_contestants.won": true
            })
        
        res.status(200).json(challengesWon);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: `Error retrieving challenges won by contestant with id ${id}`
        })
    }
}

module.exports = {
    challengesWonByContestant
};