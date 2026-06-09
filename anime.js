const axios = require("axios");

module.exports = {
  name: "!anime",
  execute: async (sock, from, text) => {
    const query = text.replace("!anime", "").trim();

    if (!query) {
      return sock.sendMessage(from, { text: "❌ Please provide an anime name." });
    }

    try {
      const res = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${query}&limit=1`
      );

      const anime = res.data.data[0];

      const msg = `
🎌 *Anime Found*

📺 Title: ${anime.title}
⭐ Score: ${anime.score}
📅 Episodes: ${anime.episodes}
🔥 Status: ${anime.status}

🧠 Great Sage: Analysis complete.
      `;

      await sock.sendMessage(from, { text: msg });
    } catch (e) {
      await sock.sendMessage(from, { text: "⚠️ Anime not found." });
    }
  }
};
