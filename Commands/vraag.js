
const discord = require('discord.js');
const botConfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    if(!args[0]) return message.reply("Stuur een voledige vraag");
    let replies = ["ja", "nee", "vraag het later opnieuw", "Ik denk het niet",];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ");

    let vraagembed = new discord.MessageEmbed()
    .setAuthor(message.author.tag)
    .setColor("#FF9900")
    .addField("vraag", question)
    .addField("Antwoord", replies[result]);

    message.channel.send(vraagembed);



}
module.exports.help = {
    name: "vraag",
    description: ""

}