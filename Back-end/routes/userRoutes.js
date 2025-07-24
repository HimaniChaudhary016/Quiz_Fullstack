var express = require("express");

const {
  createUserController,
  getUserController,
  loginHandleController,
} = require("../controller/userController");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res) {
  res.json({
    message: "Student Controller is working",
  });
});
router.post("/create", createUserController);
router.post("/login", loginHandleController);

module.exports = router;
