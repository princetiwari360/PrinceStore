const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const db = require("./config/db");


const app = express();

app.use(cors());

app.use(express.json());
const authRoutes =
require("./routes/authRoutes");

app.use(
  "/api/auth",
  authRoutes
);
const productRoutes =
require("./routes/productRoutes");
app.use(
  "/api/products",
  productRoutes
);

const orderRoutes =
require("./routes/orderRoutes");

app.use(
  "/api/orders",
  orderRoutes
);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message:
      "PrinceStore Backend Running Successfully",
  });
});

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server Running On Port ${PORT}`
  );
});
setInterval(() => {
  console.log("Server Alive...");
}, 5000);