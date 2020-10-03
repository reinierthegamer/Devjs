const Discord = require('discord.js');
const fs = require("fs");

exports.run = (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Geen perms");
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('tagg een user');
  if (reason.length < 1) return message.reply('Geef een reden op');

  let dmsEmbed = new Discord.MessageEmbed()
  .setTitle("Warn")
  .setColor("#00ff00")
  .setDescription(`U hebt gewarnd door \`${message.guild.name}\``)
  .addField("gewarnd door", message.author.tag)
  .addField("Reden", reason);

  user.send(dmsEmbed);

  message.delete();
  
  message.channel.send(`${user.tag} is gewarnd`)

}

exports.help = {
  name: 'warn'
};