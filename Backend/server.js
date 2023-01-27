const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")
const cors = require("cors");
const session = require('express-session');

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

// Middleware - Has to be placed infront of the routes
app.use(cors(corsOptions));

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: false
}));

// cookie parser middleware
app.use(cookieParser());

// parse requests of content-type - application/json
app.use(express.json({limit: "10mb", extended: true}))

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({limit: "10mb", extended: true, parameterLimit: 50000}))

const users = require('./API/users');
const threads = require('./API/threads');
const answers = require('./API/answers');

app.use('/api/users', users);
app.use('/api/threads', threads);
app.use('/api/answers', answers);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});