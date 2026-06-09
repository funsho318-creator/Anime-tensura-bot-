const fs = require("fs");

function loadMemory() {
  return JSON.parse(fs.readFileSync("./database/memory.json"));
}

function saveMemory(data) {
  fs.writeFileSync("./database/memory.json", JSON.stringify(data, null, 2));
}

module.exports = { loadMemory, saveMemory };
const { loadMemory, saveMemory } = require("./ai/memory");
const memory = loadMemory();

if (!memory[from]) {
  memory[from] = {
    messages: [],
    lastSeen: Date.now()
  };
}

memory[from].messages.push(text);
memory[from].lastSeen = Date.now();

if (memory[from].messages.length > 10) {
  memory[from].messages.shift(); // keep only last 10
}

saveMemory(memory);
