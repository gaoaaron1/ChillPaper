const port = 5000;
const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app); // Create an HTTP server
const { Server } = require("socket.io");

const io = new Server(server);


app.get("/", (req, res)=> {
    res.send("Real-Time server")
});

io.on("connection", (socket) => {
    console.log("User connected");
});


// Start the server
app.listen(port, (error)=> {
    if (!error) {
        console.log(`Server is running on http://localhost:${port}`)
    }
    else {
        console.log("Error : " +error)
    }
})