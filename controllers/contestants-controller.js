const knex = require("knex")(require("../knexfile"));

const index = async (_req, res) => {
    try {
        const data = await knex("contestants");
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).send(`Error retrieving contestants`)
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

    return res.status(200).json(contestant);
  } catch (error) {
    console.log(error);
    return res.status(500).json(`Unable to retrieve contestant with ID ${req.params.id}`)
  }
};

module.exports = {
    index,
    findOne, 
};