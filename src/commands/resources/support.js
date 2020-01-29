const {RichEmbed} = require("discord.js");

module.exports = {
    name: "support",
    aliases: ["Support", "SUPPORT"],
    description: "8Ball for luck and fun!",
    catergory: null,
    usage: "Question",
    run: (bot, message, args) => {
    
    
    let supportEmbed = new RichEmbed()
    .setDescription("Support")
    .addField("Donate",  "https://streamlabs.com/Lolol324" )
    .addField("Thank you", "THANK YOU!");
    //<:
    
    message.channel.send(supportEmbed) //this sends the embed
    
    }
/*


this is the donations for me! please do so!


*/
}