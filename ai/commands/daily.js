const fs = require("fs");

module.exports = {
  name: "!daily",
  execute: async (sock, from) => {
    const db = JSON.parse(fs.readFileSync("./database/economy.json"));

    if (!db[from]) db[from] = 0;

    const reward = Math.floor(Math.random() * 500) + 100;
    db[from] += reward;

    fs.writeFileSync("./database/economy.json", JSON.stringify(db));

    await sock.sendMessage(from, {
      text: `💰 You received ${reward} Tempest Coins!`
    });
  }
};
