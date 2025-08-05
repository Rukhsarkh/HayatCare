import express from "express";
import dotenv from "dotenv";
import mongoDBConnect from "./utils/db.js";

dotenv.config({ override: true });

const PORT = process.env.PORT;
mongoDBConnect();

const app = express();

app.get("/", (_, res) => {
  res.send("This is Testing Api");
});

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
