const express = require("express");
const router = express.Router();
const petsData = require('./data.json')

router.get("/get-pets-data", function(request, response) {
    response.send(petsData);
});

router.get("/AddNewPet", function(request, response) {
    response.send(petsData)
})

module.exports = router;
