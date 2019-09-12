exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  let messagecount = parseInt(args) + 1;
message.channel.fetchMessages({ limit: messagecount })
  .then(messages => message.channel.bulkDelete(messages));
  message.reply((messagecount - 1) + " Messages successfully purged");
};

exports.conf = {
  enabled: true, // Whether this command is enabled
  guildOnly: false, // If the command can only be run in servers (No PM's)
  aliases: [], // Other ways to call the command
  permLevel: "Staff" // The minimum permission needed to run the command
};

exports.help = {
  name: "purge", // The name of the command used to call it
  category: "Moderation", // The category the command fits in
  description: "Purging!", // Short description of what the command does
  usage: "purging" // An example of how to use the command
};
