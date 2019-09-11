exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const foods = Array(
    ":bug:",
    ":ant:",
    ":bee:",
    ":scorpion:",
    ":snake:",
    ":cactus:",
    ":four_leaf_clover: ",
    ":pineapple:",
    "corn",
    "lollipop",
    "cheese",
    "pizza",
    "stew",
    "avacado",
    "dango",
    "tomato",
    "egg",
    "potato",
    "babybottle",
    "beer",
    "rat",
    ":christmas_tree:",
    ":chestnut:",
    ":lizard:",
    ":shrimp:",
    ":tangerine:"
  );
  const food = foods[Math.floor(Math.random() * foods.length)];
  if (args.length === 0){ 
    message.reply("You cannot feed air");
    return;
  }

  if (args[0].startsWith('<@') && args[0].endsWith('>')) {
    args = args[0].slice(2, -1);

    if (args.startsWith('!')) {
        args = args.slice(1);
    }

    message.reply(" **You put a "+food+" in "+client.users.get(args)+"'s mouth!**");
  }
};

exports.conf = {
  enabled: true, // Whether this command is enabled
  guildOnly: false, // If the command can only be run in servers (No PM's)
  aliases: [], // Other ways to call the command
  permLevel: "User" // The minimum permission needed to run the command
};

exports.help = {
  name: "feed", // The name of the command used to call it
  category: "Fun", // The category the command fits in
  description: "I'll Feed a user that you mention", // Short description of what the command does
  usage: "feed" // An example of how to use the command
};
