const Discord = require("discord.js")
const botconfig = require("../../json/botconfig.json")
let purple = botconfig.purple;
const fs = require("fs");




module.exports = {
  name: "help",
  aliases: ["Help", "HELP"],
  description: "this is the help command!",
  catergory: "resources",
  cooldown: 5,
  usage: "Question",
  run: async (bot, message, args) => {

    const data = [];
    const { commands } = message.client;

    let prefixes = JSON.parse(fs.readFileSync("./json/prefixes.json", "utf8"));
    if (!prefixes[message.guild.id]) {
      prefixes[message.guild.id] = {
        prefixes: botconfig.prefix
      };
    }

    let prefix = prefixes[message.guild.id].prefixes;
    if (!args.length) {
      // ...



      // what is this prefix thing? oh yes it's that guild's prefix not the toodoolsssss


      let helpembed = new Discord.RichEmbed()
        .setTitle("Member Help Menu")
        .setDescription("DEFAULT Prefix: ?")
        .setColor("#2134cf")
        .addField("Support", "Support: https://streamlabs.com/Lolol324 or for more information do ?support, this is 100% optional but all money is thanked.")
        .addBlankField()
        .addField("info", "Help, serverinfo, botinfo, userinfo, leaderboards")
        .addBlankField()
        .addField("Moderation", "Report")
        .addField("xp", "points, xplb")
        .addBlankField()
        .addField("Gamble", "Flip")
        .addField("Fun", "dog, 911, 8Ball, lmao, hug, catfact")
        .addBlankField()
        .setTimestamp()
        .addField("USAGE", "Never use []")
        .addField("Your Server's Prefix", `${prefix}`);
        

      message.channel.send(helpembed)

      if (message.member.hasPermission("MANAGE_MESSAGES")) {
        let modembed = new Discord.RichEmbed()
          .setDescription("Mod Help Menu")
          .setColor("#2134cf")
          .addField("Moderation", "kick, warn, BAN!!")
          .addField("Other Mod", "addrole, removerole, warnlevel, purge");


        message.channel.send(modembed)


      }
      if (message.author.id === botconfig.botowner) {
        let botownerembed = new Discord.RichEmbed()
          .setTitle("BOT OWNER EMBED")
          .setDescription("Give, Remove")
          .setColor(botconfig.green)
        try {
          await message.author.send(botownerembed)
        } catch (e) {
          message.reply("DM'S ARE LOCK MY DUDE!")
        }
      }

    }

    const name = args[0];
    const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

    if (!command) return;


    if (command.cooldown === undefined) {

      command.cooldown = "6"


    }
    
     let tacos = `\*\*${command.aliases.join(', ')}\*\*`;
     let burritos = `\*\*${command.description}\*\*`;
     let pizza =  `\*\*${command.catergory}\*\*`;
     let peperoni = `\*\*${command.usage}\*\*`;
     let IceCream = `\*\*${command.cooldown}\*\*`;

    let awesome = new Discord.RichEmbed()
      .setTitle(`${command.name}:`)
      .setColor(botconfig.green)
      .addField(`Alias(es)`, tacos)
      .addField(`Description`, burritos,true)
      .addField(`Usage`, peperoni,true)
      .addBlankField()
      .addField(`Catergory`, pizza)
      .addField(`Cooldown`, IceCream)
      .setTimestamp()
      .setThumbnail('http://www.pngall.com/wp-content/uploads/2/Question-Mark-PNG-Picture.png')
    message.channel.send(awesome)
  }


}