const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "760931136440107090";

    if (!message.member.hasPermission("KICK_MEMBER")) return message.reply("Vraag een admin om deze ticket te sluiten");

    if (message.channel.parentID == categoryID) {

        message.channel.delete();

        // Create embed.
        var embedCreateTicket = new discord.MessageEmbed()
            .setTitle("Ticket " + message.channel.name)
            .setDescription("Uw ticket is gemarkeert als **compleet**.")
            .setFooter("**Ticket gesloten**");

        // Channel voor logging
        var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "logs");
        if (!ticketChannel) return message.reply("Het kanaal logs bestaat niet");

        ticketChannel.send(embedCreateTicket);

    } else {

        message.channel.send("Gelieve dit commando alleen in een ticket te gebruiken");

    }



}

module.exports.help = {
    name: "close"
}