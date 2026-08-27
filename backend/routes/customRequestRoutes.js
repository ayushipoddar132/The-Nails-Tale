const express = require("express");

const {
  createCustomRequest,
} = require("../controllers/customRequestController");

const router = express.Router();

router.post("/", createCustomRequest);

module.exports = router;