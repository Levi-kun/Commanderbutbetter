const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "savewords",
  aliases: ["Savewords", "SaveWords", "SAVEWORDS", "saveWords"],
  description: "8Ball for luck and fun!",
  catergory: "Fun",
  usage: "Question",
  run: (bot, message, args) => {

 
  let savewords = JSON.parse(fs.readFileSync("./json/savewords.json", "utf8"));

    
  savewords[message.author.id] = {
    savewords: args[0]
  };

  fs.writeFile("./json/savewords.json", JSON.stringify(savewords), (err) => {
    if (err) console.log(err)
  });
  
  let savEmbed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setTitle("Saved!")
  .setDescription(`saved ${savewords[message.author.id].savewords}`);

  message.channel.send(savEmbed);

  }

}