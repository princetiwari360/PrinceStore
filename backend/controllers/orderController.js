const db = require("../config/db");


const getOrders = (
  req,
  res
) => {

  const sql =
    "SELECT * FROM orders ORDER BY id DESC";

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
        orders: result,
      });

    }
  );

};

// CREATE ORDER

const createOrder = (
  req,
  res
) => {

  const {
    customer_name,
    phone,
    address,
    city,
    pincode,
    total_amount,
  } = req.body;

  const sql = `
    INSERT INTO orders
    (
      customer_name,
      phone,
      address,
      city,
      pincode,
      total_amount
    )
    VALUES(?,?,?,?,?,?)
  `;

  db.query(
    sql,
    [
      customer_name,
      phone,
      address,
      city,
      pincode,
      total_amount,
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
        orderId: result.insertId,
        message:
          "Order Placed Successfully",
      });

    }
  );

};
const updateOrderStatus = (
  req,
  res
) => {
  const { id } = req.params;

  const { status } = req.body;

  const sql =
    "UPDATE orders SET status=? WHERE id=?";

  db.query(
    sql,
    [status, id],
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
          "Order Status Updated",
      });
    }
  );
};
const getDashboardStats = (
  req,
  res
) => {

  const productsSql =
    "SELECT COUNT(*) AS totalProducts FROM products";

  const ordersSql =
    "SELECT COUNT(*) AS totalOrders FROM orders";

  const revenueSql =
    "SELECT SUM(total_amount) AS revenue FROM orders";

  db.query(
    productsSql,
    (err, productsResult) => {

      if (err) {
        return res.status(500).json({
          success: false,
          error: err.message,
        });
      }

      db.query(
        ordersSql,
        (err, ordersResult) => {

          if (err) {
            return res.status(500).json({
              success: false,
              error: err.message,
            });
          }

          db.query(
            revenueSql,
            (err, revenueResult) => {

              if (err) {
                return res.status(500).json({
                  success: false,
                  error: err.message,
                });
              }

              res.json({
                success: true,

                totalProducts:
                  productsResult[0]
                    .totalProducts,

                totalOrders:
                  ordersResult[0]
                    .totalOrders,

                revenue:
                  revenueResult[0]
                    .revenue || 0,
              });
            }
          );
        }
      );
    }
  );
};

module.exports = {
  getOrders,
  createOrder,
  updateOrderStatus,
  getDashboardStats,
};