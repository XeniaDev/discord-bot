exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const foods = Array(":bug:",
    ":ant:",
    ":bee:",
    ":scorpion:",
    ":snake:",
    ":cactus:",
    ":four_leaf_clover: ",
    ":pineapple:",
    "Any thing i can help you with?",
    "Now i'm online",
    "How dare you to ping me? :eyes:",
    "How dare you to ping me? :eyes:",
    "Am i crazy?",
    "NO!",
    "You want me to speak for 10001th time",
    "brb",
    "feeling weird",
    "good idea",
    "At least, I'm crazy",
    "I'm crazy, right?",
    "My aunt speaks a lot, want her to speak to you",
    "Why i cannot become a person",
    "I'm bad"
  );
  const food = foods[Math.floor(Math.random() * foods.length)];
  message.reply(food);
};

exports.conf = {
  enabled: true, // Whether this command is enabled
  guildOnly: false, // If the command can only be run in servers (No PM's)
  aliases: [], // Other ways to call the command
  permLevel: "User" // The minimum permission needed to run the command
};

exports.help = {
  name: "speak", // The name of the command used to call it
  category: "Fun", // The category the command fits in
  description: "I'll Return a weird thing in the channel, such as ok or etc", // Short description of what the command does
  usage: "speak" // An example of how to use the command
};
