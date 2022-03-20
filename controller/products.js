let productsList = [
  {
    id: 1,
    name: "Initial Product",
    price: 99,
    category: "Unknown",
    status: "Available",
    description: "Initial product description",
  },
];

function productsIndex(req, res) {
  res.json(productsList);
}

function addProduct(req, res) {
  const product = {
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    status: req.body.status,
    description: req.body.desc,
  };
  productsList.push(product);
  res.json({
    message: "product added successfully.",
  });
}

function productsDelete(req, res) {
  const id = parseInt(req.params.id);
  let tempList = [];
  productsList.forEach((product) => {
    if (product.id !== id) tempList.push(product);
  });
  productsList = [...tempList];
  res.json({
    message: "product is deleted Successfully",
  });
}

function productsDeleteAll(req, res) {
  productsList = [];
  res.json({
    message: "All products are removed",
  });
}

module.exports = {
  productsIndex,
  addProduct,
  productsDelete,
  productsDeleteAll,
};
