const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');

const app = express();
const port = 3000;

// Web server to keep Railway from sleeping
app.get('/', (req, res) => res.send('Bot is alive!'));
app.listen(port, () => console.log(`Web server up on port ${port}`));

// Discord bot setup
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Bot login
client.login(process.env.TOKEN);

// Bot online message
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Message reply
client.on('messageCreate', (message) => {
  if (message.content === '!ping') {
    message.reply('pong!');
  }
});
