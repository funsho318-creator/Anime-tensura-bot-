module.exports = {
  name: "!owner",
  execute: async (sock, from) => {
    const panel = `
👑 *Great Sage Owner Panel*

Commands:
!restart
!stats
!broadcast <msg>
!shutdown

Status:
🧠 AI: ACTIVE
⚡ System: RUNNING
🛡️ Security: ENABLED
    `;

    await sock.sendMessage(from, { text: panel });
  }
};
