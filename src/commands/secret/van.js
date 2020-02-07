const { RichEmbed } = require(`discord.js`);

module.exports = {
    name: "myid",
    aliases: ["md","personalid","pid","mid"],
    description: "Get Your Id!",
    catergory: "extras",
    usage: "null",
    run:  async (bot, message, args) => {
        let vanvoicechannel = '675433872346841138' || '675439385579356170';
        let vanUser = message.guild.member(
			message.mentions.users.first() || message.guild.members.get(args[0])
        );
        let vangif = require(`../../../pictures/amazon-776e.gif`)
        if (!vanUser) return message.channel.send(`Bro, The White Van isn't white today`);
        if(!vanUser.voiceChannel) return message.channel.send(`He ain't in any vc`);
        if(vanUser.voiceChannel === vanvoicechannel) return message.channel.send(`He already there tho!`)

        let vandisaster = new RichEmbed ()
        .setTitle(`WE GOT EM\n*${vanUser}`)
        .setThumbnail(vangif);
        
        message.channel.send(vandisaster)
         vanUser.setVoiceChannel(vanvoicechannel)
        
    }
}