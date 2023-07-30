const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");
const cors = require("cors");

require("dotenv").config();

const server = http.createServer(app);

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET,POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("send_message", (data) => {
    socket.broadcast.emit("receive_message", data);
  });
});

server.listen(5000, () => {
  console.log("App is listening on PORT 5000");
});
