module.exports = async (sock, from, text, sender) => {
  const linkPattern = /https?:\/\/chat\.whatsapp\.com/i;

  if (linkPattern.test(text)) {
    await sock.sendMessage(from, {
      text: `🛡️ Great Sage Firewall:\nLink detected!\nUser removed from Tempest.`
    });

    await sock.groupParticipantsUpdate(from, [sender], "remove");
  }
};
const antiLink = require("./system/antilink");
const sender = msg.key.participant || msg.key.remoteJid;

await antiLink(sock, from, text, sender);
