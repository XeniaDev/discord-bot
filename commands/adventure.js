exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const beebs = ["Haru","Ergastolator","HedaFox","CayoDino","Seraph","Khaos","BayoDino"];
  const pron = {"Haru": "he", "Ergastolator": "he", "HedaFox": "he","CayoDino": "he", "Seraph": "she", "Khaos": "she", "BayoDino": "she"};
  const pron2 = {"Haru": "him", "Ergastolator": "him", "HedaFox": "him","CayoDino": "him", "Seraph": "her", "Khaos": "her", "BayoDino": "her"};
  const beeb = beebs[Math.floor(Math.random() * beebs.length)];
  const adventures = Array(" tried to take at look at the forest, but it's a burned one.",
" Looked up at "+beeb+", but "+pron[beeb]+" saw a big dragon, Both tried to runaway and they could.",
    " tried to help "+beeb+" climb the tree, but they couldn't and they fell down. Ouch!",
    " Went to collect bunch of logs. Saw "+beeb+" that "+pron[beeb]+" cannot find logs, they gave the logs to "+pron2[beeb]+". so kind.",
    "  found "+beeb+" crying, and tried to ask "+pron[beeb]+" what's going on, but he went away.",
    " Suggested "+beeb+" to play with. But "+pron[beeb]+" didn't accept because their brother didn't allow "+pron2[beeb]+", Ah.",
    " was running, but they didn't see "+beeb+" and they fell down. It was just a small mistake.",
    "Tried to drink water from lake But they fell down into the lake.",
    "Zoomed aware, found something shiny. There was a diamond.",
    "Called "+beeb+" but "+pron[beeb]+" Ignored them and went. reason for it?",
    "Cried to make Plague crows afraid but they came Near and tried to bite him/her. But he/she ranaway.",
    "Sit on Cactuses.",
    "Went into the cave of fire dragons. got Burned face.",
    "Zoomed at sun"
  );
  var adventure = adventures[Math.floor(Math.random() * adventures.length)];
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
