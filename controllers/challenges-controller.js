
const index = async (_req, res) => {
    try {
        res.send(`Retrieved all challenges`)
    } catch (error) {
        console.log(error);
        res.send(`Error retrieving challenges`)
    }
};

const findOne = async (req, res) => {
    try {
      res.send(`Retrieved challenge with id ${req.params.id}`)
    } catch (error) {
      console.log(error);
      res.send(`Error retrieving challenge with id ${req.params.id}`)
    }
  };

const update = async (req, res) => {
    try {
        res.send(`Successfully updated challenge with id ${req.params.id}`)
    } catch (error) {
        console.log(error);
        res.send(`Error updating challenge with id ${req.params.id}`)
    }
};

module.exports = {
    index,
    findOne,
    update
};