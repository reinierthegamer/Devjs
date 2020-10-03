const discord = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os');
let cpuStat = require("cpu-stat");
const ms = require("ms");
 
module.exports.run = async (client, message, args) => {

    let cpuLol;
    cpuStat.usagePercent(function (err, percent, seconds) {
      if (err) {
        return console.log(err);
      }
      
      const embedStats = new discord.MessageEmbed()
        .setTitle("Specs")
        .setColor("#fcfcfc")
        .addField("🔢 Mem Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
        .addField("🧑‍🤝‍🧑 Users", `${client.users.cache.size.toLocaleString()}`, true)
        .addField("🖥️ Guilds", `${client.guilds.cache.size.toLocaleString()}`, true)
        .addField("🏃‍♂️ CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
        .addField("🌡️ CPU usage", `\`${percent.toFixed(2)}%\``, true)
        .addField("🌀 Arch", `\`${os.arch()}\``, true)
        .addField("💻 Platform", `\`\`${os.platform()}\`\``, true)
        .setTimestamp()
        .setFooter("")
        message.channel.send(embedStats)

    })
    
}
 
module.exports.help = {
    name: "specs",
    description: "dit verteld wat de specs zijn van de bot,"
}