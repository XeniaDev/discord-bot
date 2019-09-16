exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const adventures = Array(" tried to take at look at the forest, but it's a burned one.",
      " Looked up at BayoDino, but She saw a big dragon, Both tried to runaway and they could.",
    " tried to help Haru climb the tree, but they couldn't and they fell down. Ouch!",
    " Went to collect bunch of logs. They saw Khaos that she cannot find logs, they gave the logs to her. so kind.",
    "  found HedaFox crying, and tried to ask him what's going on, but he went away.",
    " Suggested CayoDino to play with him. But he didn't accept because his brother didn't allow him, Ah.",
    " was running, but they didn't see Ergastolator and they fell down. It was just a small mistake."
  );
  const adventure = adventures[Math.floor(Math.random() * adventures.length)];
  message.reply(adventure);
};

exports.conf = {
  enabled: true, // Whether this command is enabled
  guildOnly: false, // If the command can only be run in servers (No PM's)
  aliases: [], // Other ways to call the command
  permLevel: "User" // The minimum permission needed to run the command
};

exports.help = {
  name: "adventure", // The name of the command used to call it
  category: "Fun", // The category the command fits in
  description: "Go on an adventure!", // Short description of what the command does
  usage: "adventure" // An example of how to use the command
};
