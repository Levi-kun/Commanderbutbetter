const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
    name: "Meme",
    aliases: ["meme", "memes", "Memes"],
    description: "8Ball for luck and fun!",
    usage: "Question",
    run: (bot, message, args) => {

randomPuppy('memes').then(url => {
        const embed = new Discord.RichEmbed()
            .setTitle("MEME!")
            .setImage(url)
            .setColor('RANDOM');
        message.channel.send(embed);
    });
    }
}