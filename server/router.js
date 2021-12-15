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

router.post("/edit-pet/", async function (request, response) {
  console.log(request.body)
  // await Pets.updateOne(
  //   { _id: request.params.id }, 
  //   { $set: { 
  //     omanik: request.body.userId,
  //     loomaNimi: request.body.pet_name,
  //     liik: request.body.species,
  //     vanus: request.body.age,
  //     sugu: request.body.gender,
  //     v2limus: request.body.appearance,
  //     iseloom: request.body.character    
  //   } } 
  //   );
});

module.exports = router;
