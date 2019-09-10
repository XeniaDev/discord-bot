exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  message.reply("Yes I'm running off Heroku!");
};

exports.conf = {
  enabled: true, // Whether this command is enabled
  guildOnly: false, // If the command can only be run in servers (No PM's)
  aliases: [], // Other ways to call the command
  permLevel: "User" // The minimum permission needed to run the command
};

exports.help = {
  name: "heroku?", // The name of the command used to call it
  category: "Informational", // The category the command fits in
  description: "Check if bot is running off Heroku", // Short description of what the command does
  usage: "heroku?" // An example of how to use the command
};