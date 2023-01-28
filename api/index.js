const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv').config();

const port = process.env.PORT || 8001;

// const fs = require("fs");
const connectDB = require('./config/db');

//Routes
const userRoutes = require('./routes/user');
const weatherRoutes = require('./routes/weather');
// const v1 = require('./routes/v1');

// const activityRoutes = require('./routes/activityRoutes')

connectDB();
const app = express();
const http = require('http').Server(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Socket.io
const socketIO = require('socket.io')(http, {
  cors: {
      origin: "http://localhost:3000"
  }
});

global.socketIO = socketIO;

//Add this before the app.get() block
socketIO.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on('disconnect', () => {
    console.log(`🔥: ${socket.id} user disconnected`);
  });
});


app.get("/", (req, res) => {
  res.send(process.env.PORT);
})

// app.use("/api/v1", v1);
app.use("/api/v1/weather", weatherRoutes);
app.use("/api/v1/user/", userRoutes);
// app.use("/api/v1/user/signup", (req, res) => {
//   res.json(req.body.userName);
// });

// app.get("/test", (req, res) => {
//   len = pk.list.length;
//   // console.log(len)
//   res.json(pk.cities);
// });

http.listen(port, () => {
  console.log(`Server is up!.`);
});