const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botinfo = new discord.MessageEmbed()
    .setAuthor("Bot Info", bot.user.avatarURL)
    .setThumbnail(bot.user.avatarURL)
    .addField('Bot Version', "v0.1.2", true)
    .addField('Node Version', "v8.6.0", true)
    .addField('Guilds', bot.guilds.cache.size, true)
    .addField('owner', bot.users.cache.serverowner, true)
    .addField('Users', bot.users.cache.size, true)
    .addField('Channels', bot.channels.cache.size, true)
    .addField('Dev', "( Reinier.g )#5344", true)
    .setFooter("Requested By: " + message.author.username)
    .addField('Uptime', (bot.uptime/1000) + "s", true)
    
    return message.channel.send(botinfo);

}
 
module.exports.help = {
    name: "botinfo",
    //description: "botinfo"
}