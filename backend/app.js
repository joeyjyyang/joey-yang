const express = require("express");
const app = express();
const server = require("http").createServer(app);
const port = 5000; //process.env.PORT || 5000;

// Create server listener.
server.listen(port, (error) => {
  if (error) {
    console.log("Something went wrong", error);
  } else {
    console.log(`Server is listening on port ${port}`);
  }
});
