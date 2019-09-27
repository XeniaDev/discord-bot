exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const combinedString = args.join(" ");
  const weirds = ["∀","ɐ","ᙠ","q","Ɔ","ɔ","ᗡ","p","Ǝ","ǝ","Ⅎ","ǝ","ɓ","⅁","ɓ","H","ɥ","I","ı","ſ","ɾ","⋊","ʞ","˥","l","W","ɯ","N","u","O","o","Ԁ","d","Ό","b","S","s","⊥","ʇ","∩","n","Λ","ʌ","M","ʍ","X","x","⅄","ʎ","Z","z"]
  let splitMessage = combinedString.split("");
  splitMessage = weirds.slice(0);
  const reverseArray = splitMessage.reverse();
  const joinArray = reverseArray.join("");
  message.channel.send(joinArray);
};

exports.conf = {
  enabled: true, // Whether this command is enabled
  guildOnly: false, // If the command can only be run in servers (No PM's)
  aliases: [], // Other ways to call the command
  permLevel: "User" // The minimum permission needed to run the command
};

exports.help = {
  name: "reverse", // The name of the command used to call it
  category: "Fun", // The category the command fits in
  description: "Super reverse the message that you typed", // Short description of what the command does
  usage: "reverse <...message>" // An example of how to use the command
};
