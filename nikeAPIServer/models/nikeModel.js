let id = 0;
const getId = () => id++;
let sizes = [6, 7, 8, 9, 10, 11, 12];
let itemsInStock = 100;

const shoes = [
  {
    id: getId(), // created by the model
    name: "Air Jordan 1",
    colors: ["red", "white", "blue"],
    price: 165,
    sizes: [6, 7, 8, 9, 10, 11, 12], // created by the model
    itemsInStock: 100, // created by the model
  },
  {
    id: getId(),
    name: "Sabrina 3 Oregon",
    colors: ["yellow", "white", "green"],
    price: 135,
    sizes: [6, 7, 8, 9, 10, 11, 12],
    itemsInStock: 100,
  },
  {
    id: getId(),
    name: "Air Max 1",
    colors: ["red", "white", "blue"],
    price: 115,
    sizes: [6, 7, 8, 9, 10, 11, 12],
    itemsInStock: 100,
  },
];

// Can be used like "fellowModel.create()"
module.exports.create = (name, price, colors) => {
  const newShoe = { id: getId(), name, colors, price, sizes, itemsInStock };
  shoes.push(newShoe);
  return { ...newShoe };
};

module.exports.list = () => {
  return [...shoes];
};

module.exports.find = (id) => {
  const shoe = shoes.find((shoe) => shoe.id === id);
  if (!shoe) {
    return null;
  }
  return { ...shoe };
};

module.exports.update = (id, price, itemsInStock) => {
  const shoe = shoes.find((shoe) => shoe.id === id);
  if (!shoe) return null;
  shoe.price = price;
  shoe.itemsInStock = itemsInStock;
  return { ...shoe };
};

module.exports.destroy = (id) => {
  const shoeIndex = shoes.findIndex((shoe) => shoe.id === id);
  if (shoeIndex < 0) {
    return false;
  }
  shoes.splice(shoeIndex, 1);
  return true;
};
