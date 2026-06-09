const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🧠 Great Sage Bot is ONLINE");
});

app.get("/status", (req, res) => {
  res.json({
    status: "online",
    bot: "Tensura Anime Bot",
    system: "Great Sage Core Active"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("🌐 Dashboard running on port " + PORT);
})
require("./server");

