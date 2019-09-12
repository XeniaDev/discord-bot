exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  if (!args.length) {
    return;
  } else {
    //args.join(" ");
    //message.channel.send(`Printed: \`${JSON.stringify(args)}\``);
    message.channel.send(`Printed: `+ args.join(" "));
  }
};

exports.conf = {
  enabled: true, // Whether this command is enabled
  guildOnly: false, // If the command can only be run in servers (No PM's)
  aliases: [], // Other ways to call the command
  permLevel: "User" // The minimum permission needed to run the command
};

exports.help = {
  name: "print", // The name of the command used to call it
  category: "Fun", // The category the command fits in
  description: "Prints whatever you say", // Short description of what the command does
  usage: "print" // An example of how to use the command
};
