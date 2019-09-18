exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  if (!args.length) {
    return;
  } else {
  const dollar = (args[0] / 10);
  const frgem = (args[0] * 10);
  const frtr = (args[0] * 10000);
  const cs = (args[0] * 1.6);
    message.channel.send(args[0]+" Worths: \n "+dollar+" USD \n "+frgem+" FR Gems \n "+frtr+" FR Treasure \n "+cs+" C$");
  }
};

exports.conf = {
  enabled: true, // Whether this command is enabled
  guildOnly: false, // If the command can only be run in servers (No PM's)
  aliases: [], // Other ways to call the command
  permLevel: "User" // The minimum permission needed to run the command
};

exports.help = {
  name: "diamond", // The name of the command used to call it
  category: "Informational", // The category the command fits in
  description: "Getting ratio from usd, Flight rising gems, Flight rising tr and C$ with diamonds", // Short description of what the command does
  usage: "diamond" // An example of how to use the command
};
