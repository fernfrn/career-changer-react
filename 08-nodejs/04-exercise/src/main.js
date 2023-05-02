import express from "express";
const webServer = express();
webServer.use(express.json());

const ipAddress = "127.0.0.1";
const port = 3001;

// code here.
const company = [
  { 
    companyId: "01",
    name: "Example Company",
    taxId: "Tax-00",
    employees: [],
 }
];

webServer.get("/", (request, response) => {
  response.send("Hello world!");
})

webServer.get("/company", (request, response) => {
  response.json(company);
})

webServer.post("/company", (request, response) => {
  const name = response.body.name;
  const taxId = response.body.taxId;
  company.push({name},{taxId})
  response.json("Created company successfully");
})


webServer.listen(port, ipAddress, () => {
  console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
  console.log(`Address: http://${ipAddress}:${port}`);
});
