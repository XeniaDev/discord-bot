exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const his = Array("Hi!",
    "Howdy!",
    "What's up?",
    "Hello again",
    "Welcome Back!",
    "Ciao!",
    "Nice to see you again!",
    "Merhaba!",
    "Hallo!"
  );
  const hi = his[Math.floor(Math.random() * his.length)];
  message.reply(hi);
};

exports.conf = {
  enabled: true, // Whether this command is enabled
  guildOnly: false, // If the command can only be run in servers (No PM's)
  aliases: [], // Other ways to call the command
  permLevel: "User" // The minimum permission needed to run the command
};

exports.help = {
  name: "hi", // The name of the command used to call it
  category: "Fun", // The category the command fits in
  description: "Greets you with a random message", // Short description of what the command does
  usage: "hi" // An example of how to use the command
};