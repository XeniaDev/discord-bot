exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const combinedString = args.join(" ");
  const splitMessage = combinedString.split("");
  const reverseArray = splitMessage.reverse();
  const joinArray = reverseArray.join("");
  message.channel.send(joinArray);
};

exports.conf = {
  enabled: true, // Whether this command is enabled
  guildOnly: false, // If the command can only be run in servers (No PM's)
  aliases: [], // Other ways to call the command
  permLevel: "User" // The minimum permission needed to run the command
};

exports.help = {
  name: "mirror", // The name of the command used to call it
  category: "Fun", // The category the command fits in
  description: "Reverses the message that you typed", // Short description of what the command does
  usage: "mirror <...message>" // An example of how to use the command
};