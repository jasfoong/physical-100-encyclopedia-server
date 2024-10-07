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

module.exports = {
    index,
    findOne,
};