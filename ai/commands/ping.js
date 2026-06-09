module.exports = {
  name: "!ping",
  execute: async (sock, from) => {
    await sock.sendMessage(from, { text: "🏓 Pong from Great Sage!" });
  }
};
