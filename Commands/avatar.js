const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let user;
  
  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else if (args[0]) {
    user = message.guild.members.cache.get(args[0]).user;
  } else {
    user = message.author;
  }
  
  let avatar = user.displayAvatarURL({size: 4096, dynamic: true});
   // size 4096 is de grootste size
  const embed = new Discord.MessageEmbed()
  .setTitle(`${user.tag} avatar`)
  .setDescription(`[Avatar van **${user.tag}**](${avatar})`)
  .setColor(0x1d1d1d)
  .setImage(avatar)
  .setFooter('gemaakt door : ( Reinier.g )#5344', "");
  
  return message.channel.send(embed);
}
exports.help = {
  name: "avatar",
}