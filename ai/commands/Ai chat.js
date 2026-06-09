const memory = {};

function chatAI(user, text) {
  if (!memory[user]) {
    memory[user] = [];
  }

  memory[user].push(text);

  if (memory[user].length > 5) {
    memory[user].shift();
  }

  return `
🧠 Great Sage Response:

You said: "${text}"

Context level: ${memory[user].length}/5

Analysis: Conversation stored and processed.

Advice: Continue interaction to improve intelligence model.
`;
}

module.exports = chatAI;
const chatAI = require("./ai/chat");
if (text.startsWith("!chat ")) {
  const msg = text.replace("!chat ", "");
  const reply = chatAI(from, msg);

  await sock.sendMessage(from, { text: reply });
}
