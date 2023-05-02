import express from "express";
const webServer = express();
const port = 3001;
const ipAddress = "127.0.0.1";

// code down below
webServer.get("/", (req, res) => {
    res.send("This is / route");
  });

  webServer.get("/news", (req, res) => {
    // res.send("This is news route");
    const array = [];
    const news1 = {
        name: "news 1", 
        detail: "detail 1" 
    }
    array.push(news1);
    res.send(array);
  });

  webServer.get("/users", (req, res) => {
    res.send("This is users route");
  });

  webServer.get("/me", (req, res) => {
    res.send("This me route");
  });

  webServer.get("/health-check", (req, res) => {
    res.send("This health-check users route");
  });

  webServer.listen(port, ipAddress, () => {
    console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
    console.log(`Address: http://${ipAddress}:${port}`);
  });
