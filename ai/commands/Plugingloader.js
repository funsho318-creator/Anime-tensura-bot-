const fs = require("fs");

function loadPlugins(path) {
  const plugins = [];

  const files = fs.readdirSync(path);

  for (const file of files) {
    if (file.endsWith(".js")) {
      const plugin = require(`../${path}/${file}`);
      plugins.push(plugin);
    }
  }

  return plugins;
}

module.exports = loadPlugins;
const loadPlugins = require("./core/pluginLoader");

const commands = loadPlugins("commands");
const loadPlugins = require("./core/pluginLoader");

const commands = loadPlugins("commands");
