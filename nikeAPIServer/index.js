const express = require("express");
const path = require("path");

const app = express();
// let pathToFrontend = path.join(__dirname, "../frontend");
if (process.env.NODE_ENV === "production") {
  pathToFrontend = path.join(__dirname, "../frontend/dist");
}

// Instead of defining all of the controllers in this file, we've moved them to their own folder
const nikeControllers = require("./controllers/nikeControllers");

////////////////////////
// Middleware
////////////////////////

const logRoutes = (req, res, next) => {
  const time = new Date().toLocaleString();
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next();
};

app.use(logRoutes);
// app.use(express.static(pathToFrontend));
app.use(express.json());

////////////////////////
// Endpoints
////////////////////////

app.get("/api/shoes", nikeControllers.listShoes);
app.get("/api/shoes/:id", nikeControllers.findShoe);
app.post("/api/shoes", nikeControllers.createShoe);
app.patch("/api/shoes/:id", nikeControllers.updateShoe);
app.delete("/api/shoes/:id", nikeControllers.deleteShoe);

// app.get("*", (req, res, next) => {
//   if (req.originalUrl.startsWith("/api")) return next();
//   res.sendFile(pathToFrontend + "/index.html");
// });

const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`));
