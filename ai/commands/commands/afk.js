const afkDB = {};

module.exports = {
  name: "!afk",
  execute: async (sock, from, text) => {
    const reason = text.replace("!afk", "").trim();
    afkDB[from] = reason;

    await sock.sendMessage(from, {
      text: `💤 AFK Activated\nReason: ${reason}`
    });
  }
};
