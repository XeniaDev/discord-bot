exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  message.reply("Nice");
};

exports.conf = {
  enabled: true, // Whether this command is enabled
  guildOnly: false, // If the command can only be run in servers (No PM's)
  aliases: ["no!", "no?", "yes", "yes!", "yes?", "nothing"], // Other ways to call the command
  permLevel: "User" // The minimum permission needed to run the command
};

exports.help = {
  name: "no", // The name of the command used to call it
  category: "Fun", // The category the command fits in
  description: "No!", // Short description of what the command does
  usage: "no" // An example of how to use the command
};