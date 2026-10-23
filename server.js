import express from "express";
import pagesRouter from "./routes/pages.js";
import apiRouter from "./routes/api.js";
import "./routes/api.js";

const app = express();
app.set("view engine", "ejs");
const PORT = process.env.PORT || 3000;

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.use("/", pagesRouter);
app.use("/api", apiRouter);

app.use((req, res) => {
  res.status(404).send("Page not found.");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

//comment
// work in progress
// step one
// step two
// step three
// checkpoint 1
// checkpoint 2
// checkpoint 3
// BUG: off-by-one introduced here
// checkpoint 4
