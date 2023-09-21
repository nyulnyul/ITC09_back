const express = require("express");
const dotEnv = require("dotenv");

dotEnv.config();

const app = express();

const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.get("/", (req, res) => {
  res.send(`Hello ${port}World`);
});

io.on("connection", (data) => {
  console.log(`Connection data: ${data}`);
});

const port = process.env.PORT;

app.listen(port, () => console.log(`Server running on port ${port}...`));
