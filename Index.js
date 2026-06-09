const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys");
const P = require("pino");

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState("./session");

  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true,
    logger: P({ level: "silent" })
  });

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("messages.upsert", async ({ messages }) => {
    const msg = messages[0];
    if (!msg.message) return;

    const from = msg.key.remoteJid;
    const text =
      msg.message.conversation ||
      msg.message.extendedTextMessage?.text || "";

    if (text === "!ping") {
      await sock.sendMessage(from, { text: "🏓 Pong from Great Sage!" });
    }

    if (text === "!menu") {
      await sock.sendMessage(from, {
        text: `
🧠 *Tensura Anime Bot*

Commands:
!ping
!menu
!afk
!anime
!sage
        `
      });
    }
  });
}

startBot();
