exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  message.channel.send(message.guild.member(message.author).displayHexColor);
};

exports.conf = {
  enabled: true, // Whether this command is enabled
  guildOnly: false, // If the command can only be run in servers (No PM's)
  aliases: ["colour"], // Other ways to call the command
  permLevel: "User" // The minimum permission needed to run the command
};

exports.help = {
  name: "color", // The name of the command used to call it
  category: "Informational", // The category the command fits in
  description: "Returns the color of your role", // Short description of what the command does
  usage: "color" // An example of how to use the command
};