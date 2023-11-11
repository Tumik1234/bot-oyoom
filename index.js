// IMPORTANT! Please look at the README.md file in this folder to fix the "unexpected token/missing intents" problem!

const Discord = require('discord.js');
const Client = new Discord.Client();

Client.once('ready', ()=>{
    console.log('Bot is ready!');
});

Client.login('YOUR TOKEN HERE!')
