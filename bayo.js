const Discord = require('discord.js');
const Client = new Discord.Client();

Client.on('message',message=>{
  if (message.content == 'hi'){
   message.reply('wait am i working?');
  }
  if (message.content == 'bayo!'){
   message.reply('call me Bayonetta!');
  }
});

Client.login(process.env.BOT_TOKEN);