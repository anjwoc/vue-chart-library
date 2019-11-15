const express = require("express");
const app = express();
const port = 4000;
const server =require('http').createServer(app);
const io = require("socket.io")(server);
    
server.listen(`${port}`, function() {
  console.log(`Server started on port ${port}`);
});
    
function getRandomValue(){
    return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
}
io.on("connection", socket => {
    setInterval(() => {
        socket.broadcast.emit("newdata", getRandomValue())
    }, 1000)
});