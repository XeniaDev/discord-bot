exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const items = Array("Ok",
    ":eyes:",
    "What's up?",
    "I've no idea",
    "What should i say now?",
    "I have to drink coffee to speak",
    "Looking at sky. There's not The Shades.",
    "I **really** need money, i need 100 Dollars!",
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
  const item = items[Math.floor(Math.random() * items.length)];
  message.reply(item);
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