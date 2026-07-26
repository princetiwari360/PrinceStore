const express = require("express");

const router = express.Router();

const {
  getOrders,
  createOrder,
  updateOrderStatus,
  getDashboardStats,
} = require(
  "../controllers/orderController"
);

router.get(
  "/",
  getOrders
);

router.post(
  "/",
  createOrder
);

router.put(
  "/:id",
  updateOrderStatus
);
router.get(
  "/dashboard/stats",
  getDashboardStats
);

module.exports = router;