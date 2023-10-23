const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});
const { token } = require("../config.json");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// Register an event to handle incoming messages
client.on("messageCreate", async msg => {
  // Check if the message starts with '!hello' and respond with 'world!' if it does.
  if (msg.content.startsWith("!ping")) {
    msg.reply("pong!");
  }
});

client.login(token);
