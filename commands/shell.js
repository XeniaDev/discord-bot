exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  if (!args.length) {
    return;
  } else {
    if (isNumber(args[0])){
      //const number = args[0].replace(/\./g, '').replace(',', '.');
      const number = args[0].replace(/\./g, '').replace(',', '');
      const dollar = (number / 100000);
      const frgem = (number / 1000);
      const frtr = (number / 1);
      const cs = (number * 0.00016); //1 == 0.0000016
      message.channel.send(args[0]+" Worths: \n "+dollar+" USD \n "+frgem+" FR Gems \n "+frtr+" FR Treasure \n "+cs+" C$");
    } else {
      message.channel.send(args[0]+" Worths: \n "+args[0]+" USD \n "+args[0]+" FR Gems \n "+args[0]+" FR Treasure \n "+args[0]+" C$");
    }
  }
};

exports.conf = {
  enabled: true, // Whether this command is enabled
  guildOnly: false, // If the command can only be run in servers (No PM's)
  aliases: [], // Other ways to call the command
  permLevel: "User" // The minimum permission needed to run the command
};

exports.help = {
  name: "shell", // The name of the command used to call it
  category: "Informational", // The category the command fits in
  description: "Getting ratio from usd, Flight rising gems, Flight rising tr and C$ with shells", // Short description of what the command does
  usage: "shell" // An example of how to use the command
};

function isNumber(n) {
    n = n.replace(/\./g, '').replace(',', '.');
    return !isNaN(parseFloat(n)) && isFinite(n);
}
