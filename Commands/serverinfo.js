
const discord = require('discord.js');
const botConfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    var serverEmbed = new discord.MessageEmbed()
    .setDescription("Zet de beschrijving")
    .setColor("#kleur")
    .addField("Bot naam", bot.user.username)
    .addField("Je bent deze server gejoind op", message.member.joinedAt)
    .addField("Totaal members", message.guild.memberCount);
    
    return message.channel.send(serverEmbed);
    }
module.exports.help = {
    name: "serverinfo",
    description: "geef dit en help command"

}







