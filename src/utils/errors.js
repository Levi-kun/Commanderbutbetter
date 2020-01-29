const Discord = require("discord.js");
const fs = require("fs");
let config = require("../json/botconfig.json");
//this is some errors
module.exports.noPerms = (message, user, perm) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setTitle("Insufficient Permission")
        .setColor(config.red)
        .setTimestamp()
        .addField("Permission needed", user);

    message.channel.send(embed);
}
/* 




*/
// there was something here deleted at 10/9/2019 it was named nootherperms but was found reduntent. rodudnet Redu.. I'm giving up
/* 




*/
module.exports.equalPerms = (message, user, perms) => {

    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor(config.red)
        .setTimestamp()
        .setTitle("Error")
        .addField(`${message.author.username} they has perms`, user);

    message.channel.send(embed);

}
/* 




*/
module.exports.botuser = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setTimestamp()
        .setDescription("You cannot ban a bot.")
        .setColor(config.red);

    message.channel.send(embed).then(m => m.delete(5000));
}
/* 




*/
module.exports.cantfindUser = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setTimestamp()
        .setDescription("Could not find that user.")
        .setColor(config.red);

    channel.send(embed).then(m => m.delete(5000));
}
/* 




*/
module.exports.noReason = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setTimestamp()
        .setDescription("Please supply a reason.")
        .setColor(config.red);

    channel.send(embed).then(m => m.delete(5000));
}
