// /**
//  * @file help.js
//  */

// // Library
const discord = require("discord.js");
const botConfig = require("../botconfig.json");
const ms = require('ms');
const fs = require("fs");

// // Module Exports
module.exports.run = async (bot, message, args) => {




    if (args[0]) {


        return;
    }

    let generalCategory = bot.commands.filter(a => a.help.category === 'general');
    let APICategory = bot.commands.filter(a => a.help.category === 'api');
    let miscCategory = bot.commands.filter(a => a.help.category === 'misc');
    let funnyCategory = bot.commands.filter(a => a.help.category === 'funny');
    let moderationCategory = bot.commands.filter(a => a.help.category === 'moderation');
    let adminCategory = bot.commands.filter(a => a.help.category === 'admin');

    // Messages
    var helpMenu = new discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(bot.user.displayAvatarURL())
        .setTitle(`**Help menu**`)
        .addField(`**📘 Algemene commands**`, `Vind hier de algemene bot-commandos!`)
        .addField(`**🔥 API commands**`, ` check onze of andere bots`)
        .addField(`**🎬 Misc commands**`, ` Handige commando's, maar niet nodig`)
        .addField(`**🎲 Funny commands**`, ` Het is tijd om plezier te maken!`)
        .addField(`**🔦 Moderation commands**`, ` Gebruik deze commando's om andere gebruikers te straffen`)
        .addField(`**🛠️ Administrator commands**`, ` Beheerders kunnen deze opdrachten gebruiken voor botinstellingen`)
        .setTimestamp()
        .setFooter(bot.user.username)

    


        
    
  

    var generalHelp = new discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('**📘 Algemene commands**')
        .addField('**Algemene**', [
            `**-> Server Name:** ${message.guild.name}`,
            `**-> botinfo :** Hier mee kan u de Bot informatie vinden. `,
            `**-> help :** geef dit en help command`,
            `**-> serverinfo :** © Dit is alle informatie wat u momenteel nodig heeft. `,
            `**-> specs :** dit verteld wat de specs zijn van de bot, `,
            `**-> new :** dit is Onze ticket systeem. `,
            `**-> userinfo :** dit is onze userinfo commando allen Toegankelijk voor Burgers.`,
            `**-> Prefix:** - `, 
            `**-> welkom :** laat en welkom commando zien. dit word automaties gedaan`,
            `**-> suggestie :** dit is en Suggestie commando hier kan allen Staff naar kijken u kan hem wel versturen maar Staff ziet hem allen.`,
            `**-> doneren :** dit is en donatie voormuielier om de bot testeunen en betere host tekunnen krijgen.`,
            `**-> review :**  Dit is en Review Commando voor alle gebruikers`,
            '\u200b'])
    generalCategory.forEach(com => {
        generalHelp.addField(`**${com.help.name} - ${com.help.description}**`, `${prefix}${com.help.name} ${com.help.usage || ''}`);
    });

    var apiHelp = new discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`**🔥 API commands**`)
        .addField('**🔥 API commands**', [
            `**-> ⏱ Mijn uptime is:** mijn uptime is \`${ms(bot.uptime, { long: true })}\``,
            '\u200b'])
    APICategory.forEach(com => {
        apiHelp.addField(`**${com.help.name} - ${com.help.description}**`, `${prefix}${com.help.name} ${com.help.usage || ''}`);
    });

    var miscHelp = new discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`**🎬 Misc commands**`)
        .addField('**_Muziekje Information_**', [
            `**-> play:** nog in Onderhoud. `,
            `**-> stop :** nog in Onderhoud.  `,
            `**-> pause :** nog in Onderhoud. `,
            '\u200b'


        ])
    miscCategory.forEach(com => {
        miscHelp.addField(`**${com.help.name} - ${com.help.description}**`, `${prefix}${com.help.name} ${com.help.usage || ''}`);
    });

    var funnyHelp = new discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`**🎲 Fun commands**`)
        .addField('**Fun commands**', [
            `**-> dog :** dit is en dog commando voor alle gebruikers,. `,
            '\u200b'


        ])
    funnyCategory.forEach(com => {
        funnyHelp.addField(`**${com.help.name} - ${com.help.description}**`, `${prefix}${com.help.name} ${com.help.usage || ''}`);
    });

    var moderationHelp = new discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`**🔦 Moderation commands**`)
        .addField('Moderation', [
            `**-> warn:**  Dit Is de warn commando`,
            `**-> close** dit is onze Close commando allen Toegankelijk voor Tickets. `,
            `**-> claim:** Dit Is het claim commando `,
            

            '\u200b'

        ])
    moderationCategory.forEach(com => {
        moderationHelp.addField(`**${com.help.name} - ${com.help.description}**`, `${prefix}${com.help.name} ${com.help.usage || ''}`);
    });

    var adminHelp = new discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`**🛠️ Administrator commands**`)
        .addField('Administrator commands', [
            `**-> kick:** dit is onze Kick systeem `,
            `**-> ban :** dit is Onze Ban systeem. `,
            `**-> lock:** Dit Is de Lock voor Channels te locken `,
            `**-> unlock:**  Dit Is de unlock voor Channels te unlocken`,
            `**-> uit:**  Zet de bot uit`,


            '\u200b'

        ])
    adminCategory.forEach(com => {
        adminHelp.addField(`*8${com.help.name} - ${com.help.description}**`, `${prefix}${com.help.name} ${com.help.usage || ''}`);
    });

    // Pages
    let pages = [helpMenu, generalHelp, apiHelp, miscHelp, funnyHelp, moderationHelp, adminHelp];
    let page = 1;

    message.delete();
    message.channel.send(helpMenu).then(async m => {

        await m.react('📘');
        await m.react('🔥');
        await m.react('🎬');
        await m.react('🎲');
        await m.react('🔦');
        await m.react('🛠️');
        await m.react('🏠');
        await m.react('❌');

        let generalFilter = (reaction, user) => reaction.emoji.name === '📘' && user.id === message.author.id;
        let apiFilter = (reaction, user) => reaction.emoji.name === '🔥' && user.id === message.author.id;
        let miscFilter = (reaction, user) => reaction.emoji.name === '🎬' && user.id === message.author.id;
        let funnyFilter = (reaction, user) => reaction.emoji.name === '🎲' && user.id === message.author.id;
        let moderationFilter = (reaction, user) => reaction.emoji.name === '🔦' && user.id === message.author.id;
        let adminFilter = (reaction, user) => reaction.emoji.name === '🛠️' && user.id === message.author.id;
        let homeFilter = (reaction, user) => reaction.emoji.name === '🏠' && user.id === message.author.id;
        let stopFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

        let generalRc = m.createReactionCollector(generalFilter, { time: 60000 });
        let apiRc = m.createReactionCollector(apiFilter, { time: 60000 });
        let miscRc = m.createReactionCollector(miscFilter, { time: 60000 });
        let funnyRc = m.createReactionCollector(funnyFilter, { time: 60000 });
        let moderationRc = m.createReactionCollector(moderationFilter, { time: 60000 });
        let adminRc = m.createReactionCollector(adminFilter, { time: 60000 });
        let homeRc = m.createReactionCollector(homeFilter, { time: 60000 });
        let stopRc = m.createReactionCollector(stopFilter, { time: 60000 });

        generalRc.on('collect', r => {
            page = 2;
            m.edit(pages[page - 1]);
            r.users.remove(message.author.id);
        });

        miscRc.on('collect', r => {
            page = 4;
            m.edit(pages[page - 1]);
            r.users.remove(message.author.id);
        });

        funnyRc.on('collect', r => {
            page = 5;
            m.edit(pages[page - 1]);
            r.users.remove(message.author.id);
        });

        moderationRc.on('collect', r => {
            page = 6;
            m.edit(pages[page - 1]);
            r.users.remove(message.author.id);
        });

        adminRc.on('collect', r => {
            page = 7;
            m.edit(pages[page - 1]);
            r.users.remove(message.author.id);
        });

        apiRc.on('collect', r => {
            page = 3;
            m.edit(pages[page - 1]);
            r.users.remove(message.author.id);
        });

        homeRc.on('collect', r => {
            page = 1;
            m.edit(pages[page - 1]);
            r.users.remove(message.author.id);
        });

        stopRc.on('collect', () => {
            m.delete();
        });

    });



}

module.exports.help = {
    name: "help"
}