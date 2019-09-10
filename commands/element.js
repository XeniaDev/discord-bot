exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  if (!args.length) {
    return;
  } else if (args == "blood"){
  //get infos
    message.channel.send(`Blood`,{ files: ["https://i.postimg.cc/L6HnKHjw/blood.png"]});
  }
  message.channel.send({
    embed: {
      author: {
        name: message.author.username,
        icon_url: message.author.avatarURL
      },
      color: 0x0000FF,
      title: "User Info : " + message.author.username,
      description: "Username:" + message.author.username + "\n User ID: " + message.author.id + "\n Status: " + message.author.presence.status + ""
    }
  });
};

exports.conf = {
  enabled: true, // Whether this command is enabled
  guildOnly: false, // If the command can only be run in servers (No PM's)
  aliases: [], // Other ways to call the command
  permLevel: "User" // The minimum permission needed to run the command
};

exports.help = {
  name: "element", // The name of the command used to call it
  category: "Informational", // The category the command fits in
  description: "Prints whatever you say", // Short description of what the command does
  usage: "element info" // An example of how to use the command
};
