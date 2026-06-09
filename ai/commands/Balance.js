const fs = require("fs");

module.exports = {
  name: "!balance",
  execute: async (sock, from) => {
    const db = JSON.parse(fs.readFileSync("./database/economy.json"));

    const balance = db[from] || 0;

    await sock.sendMessage(from, {
      text: `💰 Your Balance: ${balance} Tempest Coins`
    });
  }
};
