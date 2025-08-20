const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = 8081;
const MONGO_URL = "mongodb://localhost:27017/lounge";
const Listing = require("../models/listing");
const initData = require("./data");

async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
  .then(() => {
    console.log("Connection to db...");
  })
  .catch((err) => {
    console.log(err);
  });

const initDb = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "689c23098b88e1a10ff10f1d",
  }));
  await Listing.insertMany(initData.data);

  console.log("Data initialize");
};
initDb();
app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});
