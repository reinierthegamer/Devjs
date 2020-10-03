const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
   if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Geen permissies vraag een admin om dit te gebruiken")
   if(!args[0])return message.channel.send("U heeft niet een nummer aangegeven dat goed is")
   if(isNaN(args[0])) return message.channel.send("Dat is geen nummer!")
   if(args[0] > 21600) return message.channel.send("Dit is Geen goed nummer, Het nummer moet onder 21600 zitten.");
   message.channel.setRateLimitPerUser(args[0])
   message.channel.send(`Slowmode gezet naar **${args[0]}**`)
  } 
module.exports.help = {
    name: "slowmode",
    description: "slowmode command."
}


