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

const update = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  
  try {
    if (!name || !description) {
      return res.status(400).json({
        message: `Missing fields. Cannot edit contestant with ID ${id}.`
      })
    }

    const existingContestant = await knex("contestants")
      .where({ id })
      .first();

    if (!existingContestant) {
      return res.status(404).json({ message: "Contestant ID not found. Please select a valid contestant." });
    }

    await knex('contestants')
      .where({ id })
      .update({
        name: name,
        description: description,
      });

    const updatedContestant = await knex("contestants")
      .where({ id })
      .first();

    return res.status(200).json(updatedContestant);
  } catch (error) {
    console.log(`Error updating contestant`, error);
    return res.status(500).json({
      message: `Internal server error while updating contestant with id ${id}`
    });
  }
};

module.exports = {
    index,
    findOne, 
    update
};