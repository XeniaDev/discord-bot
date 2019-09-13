exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const items = Array(
    ":woman_clothes:",
    ":shirt:",
    ":jeans:",
    ":dress:",
    ":kimono:",
    ":high_hill:",
    ":sandal: ",
    ":boot:",
    ":top_hat:",
    ":womans_hat:",
    ":crown:",
    ":dark_sunglasses:",
    ":eyeglasses:",
    ":avacado:",
    ":dango:",
    ":tomato:",
    ":egg:",
    ":potato:",
    ":baby_bottle:",
    ":beer:",
    ":rat:",
    ":christmas_tree:",
    ":chestnut:",
    ":lizard:",
    ":shrimp:",
    ":tangerine:"
  );
  const item = items[Math.floor(Math.random() * items.length)];
  if (args.length === 0){ 
    message.reply("You cannot wear the air");
    return;
  }

  if (args[0].startsWith('<@') && args[0].endsWith('>')) {
    args = args[0].slice(2, -1);

    if (args.startsWith('!')) {
        args = args.slice(1);
    }

    message.reply(" **You put a "+item+" in "+client.users.get(args)+"'s mouth!**");
  }
};

exports.conf = {
  enabled: true, // Whether this command is enabled
  guildOnly: false, // If the command can only be run in servers (No PM's)
  aliases: [], // Other ways to call the command
  permLevel: "User" // The minimum permission needed to run the command
};

exports.help = {
  name: "wear", // The name of the command used to call it
  category: "Fun", // The category the command fits in
  description: "I'll Wear a thing to a user you mention!", // Short description of what the command does
  usage: "wear" // An example of how to use the command
};
