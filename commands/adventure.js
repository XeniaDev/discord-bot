exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const adventures = Array(" Tried to Take a look at The forest, Nice but burned forest",
    " Looked up at BayoDino, she saw a dragon, Both are running away.",
    " Tried to Help Haru to climb the tree, But you couldn't and you and he fell down. ouch!",
    " Going to collect bunch of logs. He/She saw Khaos cannot find logs, gave the logs to her. so kindness.",
    " Found HedaFox but he was crying. He/She tried to ask HedaFox what's going on. but he went away.",
    " Suggested CayoDino to play with him. But he didn't accepted because his brother didn't allowed him, aww.",
    " Was running but he/she didn't see Ergastolator and they fell down, it just was an small mistake."
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