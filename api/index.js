const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express Using CICD on Vercel V2"));

app.listen(5000, () => console.log("Server ready on port 5000."));

module.exports = app;