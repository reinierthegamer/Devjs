const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "760931136440107090";

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;

    var ticketBestaat = false;

    message.guild.channels.cache.forEach(channel => {

        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
            ticketBestaat = true;

            message.reply("U heeft al een ticket open staan ik kan er geen twee maken sorry");

            return;
        }

    });

    if (ticketBestaat) return;

    var embed = new discord.MessageEmbed()
        .setTitle("Hallo " + message.author.username)
        .setFooter("Uw ticket wordt aangemaakt");

    message.channel.send(embed);

    message.guild.channels.create(userName.toLowerCase() + "-" + userDiscriminator, { type: 'text' }).then(
        (createdChannel) => {
            createdChannel.setParent(categoryID).then(
                (settedParent) => {

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });

                    settedParent.updateOverwrite(message.author.id, {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                    });

                    var embedParent = new discord.MessageEmbed()
                        .setTitle(`Hallo ${message.author.username}`)
                        .setDescription("U kunt hier uw vraag stellen of andere dingen melden");

                    settedParent.send(embedParent);

                }
            ).catch(err => {
                message.channel.send("Er is iets Fout gegaan 😪");
            });
        }
    ).catch(err => {
        message.channel.send("Er is iets Fout gegaan 😪");
    });
}

module.exports.help = {
    name: "new"
}