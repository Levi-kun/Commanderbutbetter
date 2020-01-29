const Discord = require("discord.js")
module.exports =  {
   name: "911",
   aliases: ["emergancy", "Emergancy", "9111"],
   description: "basically 8ball!",
   catergory: "Emergancy",
   usage: `911 <emergencey>`,
   run: (bot, message, args) => {

    if(!args[0]) return message.reply('Please tell me your emergancy!')
    
    let replies =["We got it!", "Is this a prank call?", "You called the wrong number!", "420 What's you smokin?", "CODE ORANGE CODE ORANGE, we have a random excuse on the loose.", "Our Police Department is on its way!", "Rember kids, if life gives you lemons you throw it at this kid.", "Stop prank calling us.", "spaggeti? no its mom, SPAGGETI!", "never say never! unless you have to fit in a song!", "our fire department is on its way!", "The ambulance is on its way", "our departments are on their way!", "420 what's you smoking?"];
    
    let result = Math.floor((Math.random() * replies.length));
    
    let quetion = args.slice(0).join(" ");
    
    let nineEmbed = new Discord.RichEmbed()
    .setTitle("911")
    .addField("Immergancy", quetion)
    .addField("Responce", replies[result])
    .setColor("RANDOM");
    
    message.channel.send(nineEmbed);
   }
}
