let botconfig = require(`../../json/botconfig.json`)

module.exports = {
        name: "reload",
        description: "reloads a bot command!",
        usage: "!reload",
        category: "Util",
        OwnerRequired: true,
        aliases: ["creload", "Reload", "RELOAD"],
    run: async (bot, message, args) => {

    if(message.author.id != botconfig.botowner) return message.channel.send("aight imma head out idiot")

    if(!args[0]) return message.channel.send("Please provide a command to reload!")

    let commandName = args[0]

    try {
        delete require.cache[require.resolve(`./${commandName}.js`)] // usage !reload <name>
        bot.commands.delete(commandName)
        const pull = require(`./${commandName}.js`)
        bot.commands.set(commandName, pull)
    } catch(e) {
        return message.channel.send(`Could not reload: \`${args[0].toUpperCase()}\``)
    }

    message.channel.send(`The command \`${args[0].toUpperCase()}\` has been reloaded!`)
    }
    }