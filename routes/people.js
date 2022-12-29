const express = require('express');
const { createOrGetPerson, getPeople } = require("../controllers/person")
const router = express.Router();

router.post("/", createOrGetPerson);
router.get("/", getPeople);

module.exports = router;
