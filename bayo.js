const Discord = require('discord.js');
const Keyv = require('keyv');
const Client = new Discord.Client();
const embed = new Discord.RichEmbed();

Client.on('ready', () => {
  console.log(`Logged in as ${Client.user.tag}!`);
  const channel = Client.channels.get('619902581342208014');
  channel.send("I've been restarted!");
  Client.user.setActivity("bayo!help", { type: "PLAYING" })
    .catch(console.error);
  Client.user.setStatus("offline");
});

Client.on('message',message=>{
  if (message.content == 'bayo!hi'){
   //message.reply('wait am i working?'); 
    var his = Array("Hi!",
                      "Howdy!",
                      "What's up?",
                      "Hello again",
                      "Welcome Back!",
                      "Ciao!", 
                      "Nice to see you again!",
                      "Merhaba!",
                      "Hallo!"
                     );
    var hi = his[Math.floor(Math.random()*his.length)];
    message.reply(""+hi+"");
  }else if (message.content == 'bayo!'){
   message.reply('call me Bayonetta!');
  }else if (message.content == 'bayo!heroku?'){
    message.reply('Yes I\'m running off Heroku!');
  }else if (message.content == 'bayo!ergastolator1'){
    message.reply('Thanks for waiting for me ergastolator1!');
  }else if (message.content == 'bayo!help'){
    message.channel.send({embed: {
        color: message.guild.member(message.author).displayHexColor,
        title: "BayoTest Discord bot",
        description: "I'm a very basic bot made by BayoDino and Haruyuki and Ergastolator1. I'll become a helper for Cranterns bot ^-^, Ergastolator1 is not a person that made it, BTW :) He only helped to make it, but thanks for including him anyways in the command!",
        fields: [{
            name: "What can I do?",
            value: "At this time, I can jut do basic things :confused:"
        },
        {
            name: "Commands",
            value: "`bayo!speak` -> I'll Return a weird thing in the channel. Such as ok or etc \n `bayo!confused` -> I'll Return 'Why are you confused?' \n `bayo!ily` -> I'll be thank ful \n `what is my avatar url?` -> I'll Return your avatar url to you \n `what is my username?` -> I'll Return your username"
        }]
    }});
  }else if (message.content == 'bayo!confused'){
    message.reply("Why are you confused?");
  }else if (message.content == 'bayo!ily'){
    message.reply("oooh thank you! :heart:");
  }else if (message.content == 'bayo!speak'){
    var items = Array("Ok",
                      ":eyes:",
                      "What's up?",
                      "I've no idea",
                      "What should i say now?",
                      "I have to drink coffee to speak", 
                      "Looking at sky. There's not The Shades.",
                      "By name is similar to BayoDino's username",
                      "I **really** need money, i need 100 Dollars!",
                      "Any thing i can help you with?",
                      "Now i'm online",
                      "How dare you to ping me? :eyes:"
                     );
    var item = items[Math.floor(Math.random()*items.length)];
    message.reply(""+item+"");
  }else if (message.content == 'bayo!whychangepfp?'){
    message.reply("Because it's weird");
  }else if (message.content == 'why do you want to change your pfp?'){
    message.reply("Because it's weird");
  }else if (message.content == 'bayo!editable?'){
    message.reply("Why?");
  }else if (message.content == 'what is my avatar url?' || message.content == 'bayo!avatarurl') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }else if (message.content == 'what is my username?' || message.content == 'bayo!username') {
    // Send the user's avatar URL
    message.reply(message.author.username);
  }else if (message.content == 'bayo!info'){
    message.channel.send({embed: {
      author: {
       name: message.author.username,
      icon_url: message.author.avatarURL
    },
        color: 0x0000FF,
        title: "User Info : "+message.author.username,
        description: "Username:"+message.author.username+"\n User ID: "+message.author.id+"\n Status: "+message.author.presence.status+""
    }});
  }else if (message.content == 'what is my color?'){
    message.channel.send(message.guild.member(message.author).displayHexColor);
  }
});

Client.login(process.env.BOT_TOKEN);
