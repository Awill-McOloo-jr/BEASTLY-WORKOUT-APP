const express = require("express");

//controller Functions
const { loginUser, signupUser } = require("../controllers/userController");

const router = express.Router();

//login Route
router.post("/login", loginUser);

//signup Route
router.post("/signup", signupUser);

module.exports = router;
