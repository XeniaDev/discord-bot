exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  if (!args.length) {
    return;
  } else if (args == "blood"){
  //get infos
    //message.channel.send(`Blood`,{files: ["https://i.postimg.cc/L6HnKHjw/blood.png"]} );
  message.channel.send({
    embed: {
      author: {
        name: message.author.username,
        icon_url: message.author.avatarURL
      },
      color: 0xFF0000,
      title: "Element : Blood",
      files: ["https://i.postimg.cc/L6HnKHjw/blood.png"],
      description: "**Capital Zone**: Plague Arena \n **Element color** : Red \n **Reigning God** : PlagueGriff \n **Versus** : Nature \n **Population**: 12"
    }
    });
  }else if (args == "fire"){
  //get infos
    //message.channel.send(`Blood`,{files: ["https://i.postimg.cc/L6HnKHjw/blood.png"]} );
  message.channel.send({
    embed: {
      author: {
        name: message.author.username,
        icon_url: message.author.avatarURL
      },
      color: 0xff8000,
      title: "Element : Fire",
      files: ["https://i.postimg.cc/y621TcPV/Fire.png"],
      description: "**Capital Zone**: Volcano \n **Element color** : Orange \n **Reigning God** : Volcan \n **Versus** : Water \n **Population**: 4"
    }
    });
  }
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
