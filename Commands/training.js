const discord = require("discord.js");

module.exports.run = async (client, message, args) => {


    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry vraag iemand met een hogere rang om dit te doen");

    var seperator = "|";

    if (args[0] == null) {

        var embed = new discord.MessageEmbed()
            .setTitle("Training")
            .setColor("#00ee00")
            .setDescription(`Maak een training aan door gebruik te maken van \n -training ${seperator} team ${seperator} host ${seperator} co-host ${seperator} tijd ${seperator} datum ${seperator} opmerking ${seperator} \n\n VERGEET NIET DE ${seperator}`);

        return message.reply(embed);

    }

    var argsList = args.join(" ").split(seperator);

    if (argsList[2] === undefined) argsList[2] = "";
    if (argsList[3] === undefined) argsList[3] = "training";

    var options = {

        
        team: argsList[0] || "Geen team opgegeven ( dus deze training gaat niet door )",
        kanaal: argsList[1],
        host: argsList[2],
        cohost: argsList[3],
        tijd: argsList[4],
        datum: argsList[5],
        opmerking: argsList[6]
    

    }

    var trainingEmbed = new discord.MessageEmbed()
        .setTitle("Training")
        .setColor(options.kleur)
        .setDescription(`Training van ${message.author} \n \n team ${options.team} \n host ${options.host} \n co-host ${options.cohost} \n tijd ${options.tijd} \n datum ${options.datum} \n opmerking ${options.opmerking} `)
        .setTimestamp()
        .setFooter("Gemaakt door ( Reinier.g )#5344");

    var channel = message.member.guild.channels.cache.find(channels => channels.name === options.kanaal);

    message.channel.send(trainingEmbed);

}

module.exports.help = {
    name: "training",
    description: "training command"
}