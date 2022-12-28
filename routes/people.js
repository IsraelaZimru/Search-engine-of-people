const express = require('express');
const { createPerson, getPeople } = require("../controllers/person")
const router = express.Router();

router.post("/", createPerson);
router.get("/", getPeople);

module.exports = router;
