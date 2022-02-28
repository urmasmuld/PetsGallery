const express = require('express')
const app = express()
const port = 4111
const routes = require("./router")
const bodyParser = require("body-parser")
const expressJwt = require("express-jwt");
const { SECRET } = require("./config");


app.use(
  expressJwt({ secret: SECRET, algorithms: ["HS256"] }).unless({
    path: ["/api/auth/register", "/api/auth/login", new RegExp('/api-docs.*', 'i'), new RegExp('/api/api-docs.*', 'i'), new RegExp('/api/get-pets-data.*/', 'i'), new RegExp('/api/add-comment.*/', 'i')],
    // path: ["/api/auth/register", "/api/auth/login", "/api/get-pets-data/.*/"],
  })
);

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", routes);

const swaggerUi = require("swagger-ui-express"),
swaggerDocument = require("./swagger.json");

var options = {
  components: {
    securitySchemes: {
      jwt: {
        type: "http",
        scheme: "bearer",
        in: "header",
        bearerFormat: "JWT"
      },
    }
  },
  security: [{
    jwt: []
  }]
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
