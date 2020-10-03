const { Command } = require('discord.js-commando');
const snekfetch = require('snekfetch');
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const { body } = await snekfetch.get('https://random.dog/woof.json');
    var hondembed = new Discord.MessageEmbed()
    .setColor("#00ff00")
    .setImage(body.url);

    message.channel.send(hondembed)

}
module.exports.help = {
  name: "dog"
}