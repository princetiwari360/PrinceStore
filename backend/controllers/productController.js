const db = require("../config/db");

const getProducts = (req, res) => {

  const sql =
    "SELECT * FROM products";

  db.query(
    sql,
    (err, result) => {

      if (err) {
        return res.status(500).json({
          success: false,
          error: err.message,
        });
      }

      res.json({
        success: true,
        products: result,
      });

    }
  );

};


const addProduct = (req, res) => {

  const {
    name,
    description,
    price,
    category,
    image,
    stock,
  } = req.body;

  const sql =
    `INSERT INTO products
    (name,description,price,category,image,stock)
    VALUES(?,?,?,?,?,?)`;

  db.query(
    sql,
    [
      name,
      description,
      price,
      category,
      image,
      stock,
    ],
    (err, result) => {

      if (err) {
        return res.status(500).json({
          success: false,
          error: err.message,
        });
      }

      res.json({
        success: true,
        message:
          "Product Added Successfully",
      });

    }
  );

};

const getSingleProduct = (req, res) => {

  const { id } = req.params;

  const sql =
    "SELECT * FROM products WHERE id=?";

  db.query(
    sql,
    [id],
    (err, result) => {

      if (err) {
        return res.status(500).json({
          success: false,
          error: err.message,
        });
      }

      if (result.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Product Not Found",
        });
      }

      res.json({
        success: true,
        product: result[0],
      });

    }
  );
};

const updateProduct = (req, res) => {

  const { id } = req.params;

  const {
    name,
    description,
    price,
    category,
    image,
    stock,
  } = req.body;

  const sql = `
    UPDATE products
    SET
    name=?,
    description=?,
    price=?,
    category=?,
    image=?,
    stock=?
    WHERE id=?
  `;

  db.query(
    sql,
    [
      name,
      description,
      price,
      category,
      image,
      stock,
      id,
    ],
    (err) => {

      if (err) {
        return res.status(500).json({
          success: false,
          error: err.message,
        });
      }

      res.json({
        success: true,
        message:
          "Product Updated Successfully",
      });

    }
  );
};

const deleteProduct = (req, res) => {

  const { id } = req.params;

  const sql =
    "DELETE FROM products WHERE id=?";

  db.query(
    sql,
    [id],
    (err) => {

      if (err) {
        return res.status(500).json({
          success: false,
          error: err.message,
        });
      }

      res.json({
        success: true,
        message:
          "Product Deleted Successfully",
      });

    }
  );
};
module.exports = {
  getProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};