const { MessageEmbed } = require(`discord.js`);

module.exports = {
    name: "myid",
    aliases: ["md","personalid","pid","mid"],
    description: "Get Your Id!",
    catergory: "extras",
    usage: "null",
    run:  async (bot, message, args) => {
        let yourid = message.author.id

        let idEmbed = new MessageEmbed ()
        .setTitle(`YOUR ID:\n${yourid}`);

        message.channel.send(idEmbed);
    }
};