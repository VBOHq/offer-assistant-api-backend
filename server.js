const https = require('https');
const http = require('http');
const fs = require('fs');

const express = require("express");
const cors = require("cors");

const app = express();
var router = require("express").Router();

var corsOptions = {
  origin: "http://localhost:3000", //'*' //"http://localhost:3000" 
};
// app.use(cors());

//setting my environment
require('dotenv').config();

const PORT = process.env.PORT || 8000;

var bodyParser = require('body-parser');
swaggerJsdoc = require("swagger-jsdoc"),
swaggerUi = require("swagger-ui-express");

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(require('cookie-parser')(process.env.COOKIESECRET));

// set up handlebars view engine
var handlebars = require('express3-handlebars')
  .create({ defaultLayout:'main',
  helpers: {
    static: function(name) {
      return require('./lib/static.js').map(name);
    },
    section: function(name, options){
      if(!this._sections) this._sections = {};
      this._sections[name] = options.fn(this);
      return null;
    },
  },
});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static("assets"));

//routes
require("./app/project/routes/index.routes.js")(app);
require("./app/blueprint/routes/index.routes.js")(app);
require("./app/user/routes/index.routes.js")(app);

// simple route
router.get("/", (req, res) => {
  res.json({name: "Offer assistant api",
  desc: "Offer assistant"});
});

app.use('/', router);

//swagger
const options = {
  definition: {
    openapi: "3.1.0",
    "swagger": "2.0",
    info: {
      title: "Earlyschool API with Swagger",
      version: "2.0",
      description:
        "Earlyschool API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Support",
        url: "https://early.school",
        email: "support@early.school",
      },
    },
    servers: [
      {
        url: "http://localhost:8000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

if (process.env.STATUS == 'production'){
  const server = https.createServer(httpsOptions, app);
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
} else {
  const server = http.createServer(app);
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
};