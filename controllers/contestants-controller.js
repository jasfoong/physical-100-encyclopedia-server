const knex = require("knex")(require("../knexfile"));

const index = async (_req, res) => {
    try {
        const data = await knex("contestants");
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send(`Error retrieving contestants`)
    }
};

const findOne = async (req, res) => {
    try {
      const contestant = await knex("contestants")
        .where({ id: req.params.id })
        .first();

      if (!contestant) {
        return res.status(404).json({
            message: `Contestant with ID ${req.params.id} not found`
        });
      }

      res.status(200).json(contestant);
    } catch (error) {
      console.log(error);
      res.status(500).json(`Unable to retrieve contestant with ID ${req.params.id}`)
    }
  };

const update = async (req, res) => {
    try {
        res.send(`Successfully updated contestant with id ${req.params.id}`)
    } catch (error) {
        console.log(error);
        res.send(`Error updating contestant with id ${req.params.id}`)
    }
};

module.exports = {
    index,
    findOne, 
    update
};