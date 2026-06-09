module.exports = {
  name: "!menu",
  execute: async (sock, from) => {
    const msg = `
🧠⚡ *TENSURA BOT MENU*

🎌 Anime:
!anime

🧠 AI:
!sage

😴 AFK:
!afk

👥 Group:
!tagall (coming soon)

⚡ Powered by Great Sage
    `;

    await sock.sendMessage(from, { text: msg });
  }
};
const anime = require("./commands/anime");
const menu = require("./commands/menu");

const commands = [ping, sage, afk, anime, menu];
