exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  message.reply("Thanks for waiting for me ergastolator1!");
};

exports.conf = {
  enabled: true, // Whether this command is enabled
  guildOnly: false, // If the command can only be run in servers (No PM's)
  aliases: [], // Other ways to call the command
  permLevel: "User" // The minimum permission needed to run the command
};

exports.help = {
  name: "ergastolator1", // The name of the command used to call it
  category: "Fun", // The category the command fits in
  description: "A command for Ergastolator1", // Short description of what the command does
  usage: "ergastolator1" // An example of how to use the command
};