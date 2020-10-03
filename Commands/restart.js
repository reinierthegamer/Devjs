const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {

    if (message.author.id !== '528557003770167297') {
        return message.channel.send(`Je kan dit command niet gebruiken`)
    }
    await message.channel.send(`De bot staat nu uit vraag de hosting https://discord.gg/GXGwQrv om de bot weer aan te zetten `)
    process.exit();
}
module.exports.help = {
    name: "uit",
    description: "restart command."
}