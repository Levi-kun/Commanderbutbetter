const { readdirSync } = require("fs");



module.exports = async (bot) => {

    
    const load = dirs => {
    const index = readdirSync(`.`).filter(file => file.endsWith(".js"))
    readdirSync("./commands/").forEach(dir => {


        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));

       

        

        
        for (let file of commands) {
            let pull = require(`../commands/${dir}/${file}`);
    
            if (pull.name) {
                bot.commands.set(pull.name.toLowerCase(), pull);
            } else {
                continue;
            }
           
           
                
            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => bot.aliases.set(alias, pull.name));
            
        }

    
    });
    
     
    

  
    
    
}
["Util", "resources", "Random", "Points", "Moderation", "Fun"].forEach(x => load(x));
}