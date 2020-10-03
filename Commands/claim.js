const discord = require("discord.js");
const botConfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

 
        if(message.author.bot) return;
     
        if(message.channel.type === "dm") return;
     
        var prefix = botConfig.prefix;
     
        var messageArray = message.content.split(" ");
     
        var command = messageArray[0];
     

        return message.channel.send(`Deze ticket is geclaimd door **<@${message.author.id}>**`);
       
        }

module.exports.help = {
    name: "claim",
    description: "Hier mee kan u en Ticket Claimen"

}