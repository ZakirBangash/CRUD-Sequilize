// const express = require('express');
// const db = require("./models");

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({
//   extended: false
// }));

// app.get('/', (req, res) => {
//   res.send("Hello world")
//   console.log('API is up');
// })

// db.sequelize.sync()
//   .then(() => {
//     console.log("Synced db.");
//   })
//   .catch((err) => {
//     console.log("Failed to sync db: " + err.message);
//   });


// app.listen(3000, (req, res) => {
//   console.log('server started');
// })


const express = require("express");
const cors = require("cors");
const db = require("./models");
const router = require("./routes");

const app = express();

const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to QuarterGoal." });
});

app.use('/api/v1',router)
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});