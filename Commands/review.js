const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {

    const amountStars = args[0];

    if (!amountStars || amountStars < 1 || amountStars > 10) return message.reply("Geef een aantal sterren op van 1-10 En vul daarna een review in ");

    var text = args.splice(1, args.length).join(" ") || '**Geen text opgegeven**';

    var channel = message.member.guild.channels.cache.get("760501624875122701");

    if(!channel) return message.channel.send("Kanaal bestaat niet");

    var stars = "";
    for (let i = 0; i < amountStars; i++) {
        
        stars+= ":star: ";
        
    }
    

    message.delete();

    const embed = new discord.MessageEmbed()
    .setTitle(`${message.author.username} heeft een review geschreven`)
    .setColor("#00FF00")
    .addField("Sterren:", stars )
    .addField("Review", text  )

    message.channel.send("✅ Gelukt");

    return channel.send(embed);


 
 
}
module.exports.help = {
    name: "review",
    description: "review command."
}