const express = require("express");
const router = express.Router();
// const petsData = require('./data.json')
const { Pets } = require("./dbConnection");
const authRoutes = require("./authenticate.router");

router.use("/auth", authRoutes);

router.post("/get-pets-data/:userId", async function(request, response) {
    // response.send(petsData);
    // console.log(request.body)
    let omanik = request.params.userId;
    const options = { 
        page: request.body.page || 1,
        limit: request.body.limit || 1,
        projection: { pilt64: 0 },
        // sort: { loomaNimi: 1 },
     }
    const result = await Pets.paginate({ omanik: omanik }, options);
    // console.log(result);
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
  // console.log(request.body)
  if (request.body.pet_id) {
  await Pets.updateOne(
    { _id: request.body.pet_id }, 
    { $set: { 
      loomaNimi: request.body.loomaNimi,
      liik: request.body.liik,
      vanus: request.body.vanus,
      sugu: request.body.sugu,
      v2limus: request.body.v2limus,
      iseloom: request.body.iseloom,
    } } 
    );
    console.log("Muuda Pet...");
  }
  response.send("done");
});

module.exports = router;