const { RichEmbed } = require(`discord.js`);
const fs = require(`fs`)
module.exports = {
    name: "van",
    aliases: ["whitevan","wv","whitev","wvan"],
    description: "Get em out!",
    catergory: "secret",
    usage: "null",
    run:  async (bot, message, args) => {
        /*                                      */
        let randomint = '675439385579356170';
        /*                                      */

        let userid = '470313014193684491'
        if(message.author.id != userid) return message.channel.send(`bro dafaq? who wants to kidnapped others?`);
        let vanvoicechannel = '675433872346841138';
        let vanUser = message.guild.member(
			message.mentions.users.first() || message.guild.members.get(args[0])
        );
        if (!vanUser) return message.channel.send(`Bro, The White Van isn't white today`);
        if(!vanUser.voiceChannel) return message.channel.send(`He ain't in any vc`);
        if(vanUser.voiceChannel === vanvoicechannel) return message.channel.send(`He already there tho!`)

        let vandisaster = new RichEmbed ()
        .setTitle(`WE GOT EM\n\n*${vanUser.user.username}* --> Van Channel`)
        .setThumbnail('https://i2.wp.com/metro.co.uk/wp-content/uploads/2018/12/amazon-776e.gif?quality=90&strip=all&zoom=1&resize=440%2C247&ssl=1');
        
        message.channel.send(vandisaster)
         vanUser.setVoiceChannel(vanvoicechannel)
        
    }
}