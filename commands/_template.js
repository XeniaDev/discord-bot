exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  message.channel.send("This isn't a usable command!");
};

exports.conf = {
  enabled: true, // Whether this command is enabled
  guildOnly: false, // If the command can only be run in servers (No PM's)
  aliases: [], // Other ways to call the command
  permLevel: "User" // The minimum permission needed to run the command
};

exports.help = {
  name: "", // The name of the command used to call it
  category: "System", // The category the command fits in
  description: "", // Short description of what the command does
  usage: "" // An example of how to use the command
};