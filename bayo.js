const Discord = require('discord.js');
const Client = new Discord.Client();

Client.on('message',message=>{
  if (message.content == 'bayo!hi'){
   message.reply('wait am i working?');
  }
  if (message.content == 'bayo!'){
   message.reply('call me Bayonetta!');
  }
  if (message.content == 'bayo!heroku?'){
    message.reply('Yes I\'m running off Heroku!');
  }
  if (message.content == 'bayo!ergastolator1'){
    message.reply('Thanks for waiting for me ergastolator1!');
  }
  if (message.content == 'bayo!help'){
    message.reply("I\'m a very basic bot made by BayoDino and Haruyuki and Ergastolator1. I\'ll become a helper for Cranterns bot ^-^");
  }
});

Client.login(process.env.BOT_TOKEN);
