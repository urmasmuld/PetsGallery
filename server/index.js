const express = require('express')
const app = express()
const port = 4111
const routes = require("./router")
const bodyParser = require("body-parser")
const db = require("./dbConnection")
const expressJwt = require("express-jwt");
const { SECRET } = require("./config");


app.use(
  expressJwt({ secret: SECRET, algorithms: ["HS256"] }).unless({
    path: ["/api/auth/register", "/api/auth/login", new RegExp('/api/get-pets-data.*/', 'i'), new RegExp('/api/add-comment.*/', 'i')],
    // path: ["/api/auth/register", "/api/auth/login", "/api/get-pets-data/.*/"],
  })
);

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
