const { readdirSync } = require("fs");

const ascii = require("ascii-table");

let table = new ascii("Commands");


table.setHeading("File", "Ready Status");
module.exports = async (bot) => {

    

    const index = readdirSync(`.`).filter(file => file.endsWith(".js"))
    readdirSync("./commands/").forEach(dir => {


        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));

        table.addRow(`------------------`, `---`)
        table.addRow(dir)
        table.addRow(`------------------`, `---`)


        for (let file of commands) {
            let pull = require(`../commands/${dir}/${file}`);
    
            if (pull.name) {
                bot.commands.set(pull.name, pull);
                table.addRow(file, '✅');
            } else {
                table.addRow(file, `❌  -> missing a help.name, or help.name is not a string.`);
                continue;
            }
           
    
            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => bot.aliases.set(alias, pull.name));
        }

        
    });

        table.addRow(`------------------`, `---`)
        table.addRow(index, `✅`);

    console.log(table.toString());
}