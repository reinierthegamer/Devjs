module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry niet genoeg perms");
  const sayMessage = args.join(" ");
  message.delete().catch(O_o=>{}); 
  message.channel.send(sayMessage);

}

module.exports.help = {
  name: "say"
}

//if(message.author.id === "485494651835383828") return