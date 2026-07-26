const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getProfile = (
  req,
  res
) => {

  res.json({
    success: true,
    user: req.user,
  });

};

const register = async (req, res) => {
  try {
    const { name, email, password } =
      req.body;

    if (
      !name ||
      !email ||
      !password
    ) {
      return res.status(400).json({
        success: false,
        message:
          "All fields are required",
      });
    }

    const checkUser =
      "SELECT * FROM users WHERE email=?";

    db.query(
      checkUser,
      [email],
      async (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            error: err.message,
          });
        }

        if (result.length > 0) {
          return res.status(400).json({
            success: false,
            message:
              "Email already exists",
          });
        }

        const hashedPassword =
          await bcrypt.hash(
            password,
            10
          );

        const sql =
          "INSERT INTO users(name,email,password) VALUES(?,?,?)";

        db.query(
          sql,
          [
            name,
            email,
            hashedPassword,
          ],
          (err, result) => {
            if (err) {
              return res
                .status(500)
                .json({
                  success: false,
                  error:
                    err.message,
                });
            }

            res.json({
              success: true,
              message:
                "User Registered Successfully",
            });
          }
        );
      }
    );
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};


const login = (req, res) => {
  const { email, password } =
    req.body;

  const sql =
    "SELECT * FROM users WHERE email=?";

  db.query(
    sql,
    [email],
    async (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          error: err.message,
        });
      }

      if (result.length === 0) {
        return res.status(400).json({
          success: false,
          message:
            "User Not Found",
        });
      }

      const user = result[0];

      const isMatch =
        await bcrypt.compare(
          password,
          user.password
        );

      if (!isMatch) {
        return res.status(400).json({
          success: false,
          message:
            "Invalid Password",
        });
      }

      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d",
        }
      );

      res.json({
        success: true,
        message:
          "Login Successful",
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      });
    }
  );
};

module.exports = {
  register,
  login,
  getProfile
};