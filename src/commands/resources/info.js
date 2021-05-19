const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'info',
	aliases: ['information', 'ininformation', 'enformation'],
	description: 'learn about the bot from the bot!',
	usage: '[No args]',
	catergory: 'resources',
	run: (bot, message, args) => {
        //
        if (!message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send(`I really need to be able to send embed links!`);
		let bicon = bot.user.displayAvatarURL;
		let botembed = new MessageEmbed()
			.setDescription('Information')
			.setColor('#15f353')
			.setThumbnail(bicon)
            .addField('Requirments for this Bot To Operate', `Embed Links! That's all! Disabling any other permissions will make the bot LOSE some commands but embed links is the only one that is nessasary for this bot to operate! But it looks like that's already enabled <:`)
            .addField(`What Am I?`, `${bot.user.username} is a \`MULTI PURPOSE\` discord bot!`)
            .setFooter(message.author.username, message.author.displayAvatarURL)

		message.channel.send(botembed).catch(e=>{

            console.log(e)

            message.channel.send(`
    I really need to be able to send embed links!
    Go to server settings
    Then Click On \`Roles\`
    Click on my Role L:
    it's commander btw

    Then click on Embend Links!
    or Administrator!
    I really need Administrator more tho
    but for now I can deal with just Embend Links!
    <: 
    thanks in advance.
            `);
            
        });
	}
};
