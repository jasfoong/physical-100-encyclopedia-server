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
      res.send(`Retrieved contestant with id ${req.params.id}`)
    } catch (error) {
      console.log(error);
      res.send(`Error retrieving contestant with id ${req.params.id}`)
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