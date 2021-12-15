const express = require("express");
const router = express.Router();
// const petsData = require('./data.json')
const { Pets } = require("./dbConnection");

router.get("/get-pets-data", async function(request, response) {
    // response.send(petsData);
    const result = await Pets.find();
    console.log(result);
    response.send(result);
  });

  router.post("/add-pets", async function (request, response) {
    if (request.body.omanik) {
      await Pets.create(request.body);
      console.log("Lisa Pet");
    }
    response.send("done");
  });

  // Delete
  router.get("/delete-pets/:id", async function (request, response) {
    await Pets.deleteOne({ _id: request.params.id }); 
    console.log("Deleting pets...");
    response.send({});
  });  
  module.exports = router;
