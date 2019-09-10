exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  message.reply(message.author.avatarURL); // Send the user's avatar URL
};

exports.conf = {
  enabled: true, // Whether this command is enabled
  guildOnly: false, // If the command can only be run in servers (No PM's)
  aliases: [], // Other ways to call the command
  permLevel: "User" // The minimum permission needed to run the command
};

exports.help = {
  name: "avatarurl", // The name of the command used to call it
  category: "Fun", // The category the command fits in
  description: "Return your avatar url to you", // Short description of what the command does
  usage: "avatarurl" // An example of how to use the command
};