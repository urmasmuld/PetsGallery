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

<<<<<<< HEAD
router.get("/AddNewPet", function(request, response) {
    response.send(petsData)
})

module.exports = router;
=======
  router.post("/add-pets", async function (request, response) {
    if (request.body.omanik) {
      await Pets.create(request.body);
      console.log("Lisa Pet");
    }
    response.send("done");
  });
  
  module.exports = router;
>>>>>>> 93e80db8280daefd004ce615670b734b3b6c29b2
