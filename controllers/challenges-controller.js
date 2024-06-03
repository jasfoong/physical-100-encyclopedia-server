const knex = require("knex")(require("../knexfile"));

const index = async (_req, res) => {
    try {
        const data = await knex("challenges");
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send(`Error retrieving challenges`)
    }
};

const findOne = async (req, res) => {
    try {
        const challenge = await knex("challenges")
          .where({ id: req.params.id });
  
        if (challenge.length === 0) {
          return res.status(404).json({
              message: `Challenge with ID ${req.params.id} not found`
          });
        }

        res.status(200).json(challenge);
      } catch (error) {
        console.log(error);
        res.status(500).json(`Unable to retrieve challenge with ID ${req.params.id}`)
      }
  };

const update = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
  
    try {
        if (!name || !description) {
        return res.status(400).json({
            message: `Missing fields. Cannot edit challenge with ID ${id}.`
        })
        }

        const existingChallenge = await knex("challenges")
        .where({ id })
        .first();

        if (!existingChallenge) {
        return res.status(404).json({ message: "Challenge ID not found. Please select a valid challenge." });
        }

        await knex("challenges")
        .where({ id })
        .update({
            name: name,
            description: description,
        });

        const updatedChallenge = await knex("challenges")
        .where({ id })
        .first();

        return res.status(200).json(updatedChallenge);
    } catch (error) {
        console.log(`Error updating challenge`, error);
        return res.status(500).json({
        message: `Internal server error while updating challenge with id ${id}`
        });
    }
};

module.exports = {
    index,
    findOne,
    update
};