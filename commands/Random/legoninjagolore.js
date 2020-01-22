const Discord = require(`discord.js`)
const botconfig = require(`../../json/botconfig.json`)


module.exports = {
    name: "ninjago",
    aliases: ["Ninjago ", "NINJAGO", "Lego Ninjago"],
    description: "8Ball for luck and fun!",
    catergory: "Fun",
    usage: "Question",
    run: async (bot, message, args) => {
  
    let legobefore = await message.channel.send(`LEGO NINJAGO HUH?`);
    let seanbradly = bot.users.find(`id`, "470313014193684491")
    let theloreoflegoninjago = new Discord.RichEmbed()
    .setDescription(`Lego Ninjago Lore`)
    .setAuthor(seanbradly.username, seanbradly.displayAvatarURL)
    .addField(`The Lore to Lego Ninjago masters of spinjitzu is one of the most nuanced and complex universes in the history of storytelling. As such it can be almost impossible for a newcomer to comprehend the metaphors and poetic history of Lego Ninjago `, 	'The island, planet and astral plane of Ninjago was created by the first spinjitzu master. Who, using the 4 golden weapons of spinjitzu, created Ninjago. The elemental masters were tasked to protect him. Each elemental master could control and manipulate an element.')
    .setTimestamp() 
    .setColor(botconfig.purple)
    

    let theloreoflegoninjago2 = new Discord.RichEmbed()
    .addField('.',`The -known- elements are as follows, Fire, Earth, Lightning, Ice, Power/Energy, Metal, Sound, Mind, Smoke, Shadow, Light, Amber, Gravity, Poison, Form, Water, Wind, Speed, Nature, Time and Darkness.`)
    .setTimestamp()
    .setColor(botconfig.purple)

    let loreoflegoninjago3 = new Discord.RichEmbed()
    .addField('.', `The first and most important conflict in Ninjago history is the battle between the first spinjitzu master and the Overlord. The Overlord was a being of pure evil, the opposite of the first spinjitzu master. He emerged shortly after the first spinjitzu master created ninjago To stop this conflict the first spinjitzu master divided Ninjago into two separate islands.`)
    .setTimestamp() 
    .setColor(botconfig.purple)


    let loreoflegoninjago4 = new Discord.RichEmbed()
    .addField(".",`As long as there is a balance of good and evil in Ninjago, The overlord is trapped on The Dark Island. If the balance of good and evil ever shifts to be unbalanced, the island of the overlord will come to ninjago or ninjago will come to him The second conflict in the beginning of ninjago was the First Serpentine War. The two sides in the war were the 5 Serpentine tribes (mainly the Anacondrai tribe) and Master Chen, VS the Elemental masters. The war began when the serpentine attacked villages in Ninjago, the elemental masters fought back.`)
    .setTimestamp() 
    .setColor(botconfig.purple)


    let loreoflegoninjago5 = new Discord.RichEmbed()
    .addField(`.`, `The war was unfortunately in favor of the anacondrai thanks to their superior tactics. But the masters found a way to stop the snakes, they saw a snake charmer with a flute which gave them the idea to create the sacred flutes which caused the snakes to go into a trance so they could be hypnotized and placed in their respective tombs. The anacondrai generals were also sent to the cursed realm. Chen was “imprisoned” on his island and he started to form his criminal empire and founding his high quality, low cost, conveyor noodle house. The most evil chain business in existence!`)
    .setTimestamp() 
    .setColor(botconfig.purple)


    setTimeout(() => {legobefore.edit(theloreoflegoninjago) }, 5000)

    setTimeout(() => {message.channel.send(theloreoflegoninjago2) }, 6001)
    setTimeout(() => {message.channel.send(loreoflegoninjago3) }, 6009)
    setTimeout(() => {message.channel.send(loreoflegoninjago4) }, 6025)
    setTimeout(() => {message.channel.send(loreoflegoninjago5) }, 6199)
  


    }
  }

