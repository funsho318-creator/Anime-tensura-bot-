module.exports = {
  name: "!tagall",
  execute: async (sock, from) => {
    try {
      const group = await sock.groupMetadata(from);
      const members = group.participants;

      let text = "📢 *Tempest Broadcast*\n\n";

      for (let m of members) {
        text += `@${m.id.split("@")[0]}\n`;
      }

      await sock.sendMessage(from, {
        text,
        mentions: members.map(m => m.id)
      });

    } catch (e) {
      await sock.sendMessage(from, {
        text: "⚠️ This command only works in groups."
      });
    }
  }
};
