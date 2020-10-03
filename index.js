const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const client = new discord.Client();
client.commands = new discord.Collection();

fs.readdir("./commands/" , (err, files) => {


    if(err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");


    if(jsFiles.length <= 0) {
        console.log("Kon geen files vinden");
        return
    }

    jsFiles.forEach((f,i) =>{

        let props = require(`./commands/${f}`);
        console.log(`${f} Is geladen en klaar voor gebruik`);
        if (props.help && props.help.name) {
        client.commands.set(props.help.name, props);
        } else {
          console.error(`De file ${f} Heeft geen .help of .help.name property!`);
      };

    })


});

client.login(process.env.token);

client.on("guildMemberAdd", member => {

    // var role = member.guild.roles.cache.get('462166173690232842');

    // if (!role) return;

    // member.roles.add(role);
    var channel = member.guild.channels.cache.get('760502346135633921');

    if (!channel) return;

    // channel.send(`Welkom bij de server ${member}`);

    var joinEmbed = new discord.MessageEmbed()
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setDescription(`Welkom ${member.user.username}`)
        .setColor("#00FF00")
        .setFooter("Gebruiker gejoined veel plezier")
        .setTimestamp();

    channel.send(joinEmbed);

});
client.on("ready", async () => {

    console.log(`${client.user.username} is online.`);
    let activities = ["Beta™", "Prefix -", "Founder: ( Reinier.g )#5344", "Founder: SyntaxErroR#4458"]
    i = 0;
    setInterval(() => {
        client.user.setPresence({
            activity: {
                name: activities[i++ % activities.length],
                type: "LISTENING",
                type: "PLAYING",
                type: "WATCHING",
                type: "PLAYING"
            }
        })
    }, 5000);


});


client.on("message", async message => {

    if(message.author.bot) return;

    if(message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    if(!message.content.startsWith(prefix)) return;

    var arguments = messageArray.slice(1);

    var commands = client.commands.get(command.slice(prefix.length));

    if(commands) commands.run(client, message, arguments);
});