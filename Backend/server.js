const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

const users = require('./API/users');
const threads = require('./API/threads');
const answers = require('./API/answers');

app.use('/api/users', users);
app.use('/api/threads', threads);
app.use('/api/answers', answers);

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(express.json({limit: "10mb", extended: true}))

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({limit: "10mb", extended: true, parameterLimit: 50000}))

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});