module.exports = {
  name: "!broadcast",
  execute: async (sock, from, text) => {
    const msg = text.replace("!broadcast", "").trim();

    const groups = await sock.groupFetchAllParticipating();

    for (let id in groups) {
      await sock.sendMessage(id, { text: `📢 Broadcast:\n${msg}` });
    }

    await sock.sendMessage(from, {
      text: "📡 Broadcast sent to all groups."
    });
  }
};
