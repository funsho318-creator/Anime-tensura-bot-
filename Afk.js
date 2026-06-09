const afk = require("../ai/afkDB");

module.exports = {
  name: "!afk",
  execute: async (sock, from, text) => {
    const reason = text.replace("!afk", "").trim() || "AFK";

    afk[from] = {
      reason,
      time: Date.now()
    };

    await sock.sendMessage(from, {
      text: `💤 AFK Mode Activated\nReason: ${reason}`
    });
  }
};
const afk = require("./ai/afkDB");
if (afk[from]) {
  const data = afk[from];
  const duration = Math.floor((Date.now() - data.time) / 1000);

  await sock.sendMessage(from, {
    text: `🧠 Great Sage Notice:\nUser returned from AFK\nReason: ${data.reason}\nDuration: ${duration}s`
  });

  delete afk[from];
}
