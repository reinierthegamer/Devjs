const discord = require("discord.js");
    const botConfig = require("../botconfig.json");

    module.exports.run = async (bot, message, args, lock) => {
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Je hebt geen Permissie voor deze command!");

        message.delete()
        message.channel.createOverwrite(message.guild.id, {
            SEND_MESSAGES: false
        })

        var botEmbed = new discord.MessageEmbed()
            .setDescription(`🔏| Channel locked by ${message.author}`)
            .setColor("RANDOM")
        return message.channel.send(botEmbed);



    }

    module.exports.help = {
        name: "lock",
        description: "Dit Is de Lock voor Channels te locken"
    }