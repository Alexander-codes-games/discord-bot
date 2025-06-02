const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');

const app = express();

// Use Railway's dynamic port or fallback to 3000 locally
const port = process.env.PORT || 3000;

// Web server to keep Railway happy & bot alive
app.get('/', (req, res) => {
  res.send('Bot is alive!');
});

app.listen(port, () => {
  console.log(`Web server up on port ${port}`);
});

// Discord bot setup with intents
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Bot ready event
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Basic command response
client.on('messageCreate', (message) => {
  if (message.content === '!ping') {
    message.reply('pong!');
  }
});

// Login with your Discord bot token from env variables
client.login(process.env.TOKEN);
