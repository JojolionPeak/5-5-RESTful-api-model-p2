const nikeModel = require("../models/nikeModel.js");

/*
These controllers take incoming requests and utilize the
methods provided by fellowModel before sending a
response back to the client (or an error message).
*/

// Get All (Read)
module.exports.listShoes = (req, res) => {
  const shoesList = nikeModel.list();
  res.send(shoesList);
};

// Get One (Read)
module.exports.findShoe = (req, res) => {
  const { id } = req.params;
  const shoe = nikeModel.find(Number(id));

  if (!shoe) {
    return res.status(404).send({
      message: `No shoe with the id ${id}`,
    });
  }
  res.send(shoe);
};

// Create
module.exports.createShoe = (req, res) => {
  const { shoeName, shoePrice, shoeColors } = req.body;
  if (!shoeName || !shoeColors || !shoePrice) {
    return res
      .status(400)
      .send({ message: "Invalid Product. Ensure all fields are filled out." });
  }

  const newShoe = nikeModel.create(shoeName, shoePrice, shoeColors);
  res.send(newShoe);
};

// Update
module.exports.updateShoe = (req, res) => {
  const { price, itemsInStock } = req.body;
  if (price < 0 || itemsInStock < 0) {
    return res.status(400).send({ message: "Invalid Input" });
  }

  const { id } = req.params;
  const updatedShoe = shoeModels.update(Number(id), price, itemsInStock);

  if (!updatedShoe) {
    return res.status(404).send({
      message: `No shoe with the id ${id}`,
    });
  }

  res.send(updatedShoe);
};

// Delete
module.exports.deleteShoe = (req, res) => {
  const { id } = req.params;
  const didDelete = nikeModel.destroy(Number(id));

  if (!didDelete) {
    return res.status(404).send({
      message: `No shoe with the id ${id}`,
    });
  }

  res.sendStatus(204);
};
