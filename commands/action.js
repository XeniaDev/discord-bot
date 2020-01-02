exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars

  if (args.length === 0){ 
    message.reply("You cannot take an action with air");
    return;
  }

  if (args[0].startsWith('<@') && args[0].endsWith('>')) {
    args = args[0].slice(2, -1);

    if (args.startsWith('!')) {
        args = args.slice(1);
    }
if (args[0] == "<@619791583805440000>"){ 
    message.reply("*Runs Away...*");
    return;
  }
    const acts = Array(
    "Hugged",
    "Looked up at",
    "Zoomed up at",
    "Gave a piece of Pizza to",
    "Pushed",
    "Hit",
    "Slapped",
    "Kissed",
    "Said something to ",
    "Gave 1000$ to",
    "Gave his/her PayPal password to",
    "Smelled",
    "Installed GTA on a computer belongs to",
      "Smashed",
      "Bite",
      "cracked",
      "Showed up His/Her hand to",
      "Licked",
      "Fixed",
      "Ate",
      "Killed",
      "Slashed",
      "Crashed",
      "Damned",
      "Petted",
      "Touched",
      "Threw water on",
      "Threw confetti for",
      "Bullied",
      "Said something bad to",
      "Liked",
      "Loved",
      "Hated",
      "Carefully Zoomed up at",
      "Splashed water on",
      "Gifted",
      "Jumped on",
      "Restarted",
      "Did something with",
      "Cutted up"
  );  
    const act = acts[Math.floor(Math.random() * acts.length)];
    message.reply(" **"+act+" "+client.users.get(args)+"!**");
  }
};

exports.conf = {
  enabled: true, // Whether this command is enabled
  guildOnly: false, // If the command can only be run in servers (No PM's)
  aliases: ["act"], // Other ways to call the command
  permLevel: "User" // The minimum permission needed to run the command
};

exports.help = {
  name: "action", // The name of the command used to call it
  category: "Fun", // The category the command fits in
  description: "Do something weird with who you mention!", // Short description of what the command does
  usage: "action" // An example of how to use the command
};
