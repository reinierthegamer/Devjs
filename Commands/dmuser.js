const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!args[0]) return message.channel.send("Geen user aangegeven");

    var member = message.guild.member(message.mentions.users.first() || client.users.cache(args[0]));
    if(!member) return message.channel.send("Gebruiker is niet gevonden 😡 ");

    var text = args.join("").slice(args[0].length +1);
    if(!text) return message.channel.send("Geen text meegegeven");
    
    message.member.send(text).then(() => {
        message.channel.send("Bericht is succesvol verstuurt");
    }).catch(() =>{
        message.channel.send("De user heeft zijn dm uitstaan ik kan het bericht niet versturen sorry");
    });


}

module.exports.help = {
    name: "dmen"
}