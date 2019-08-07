const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
client.commands = new Discord.Collection();

fs.readdir("./src/commands/", (err, files) => {
    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");

    if(jsfile.length <= 0) {
        console.log('Couldnt find commands.'); 
        return;
    };

    jsfile.forEach((f, i) => {
        let props = require(`./src/commands/${f}`);
        console.log(`${f} loaded.`);
        client.commands.set(props.help.name, props);
    });

});

client.on('ready', async () => {
    console.log('Client connected.');
    client.user.setActivity('Byto', {type: 'LISTENING'});
});

client.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    let prefix = '/'
    let messageArray = message.content.split(' ');
    let command = messageArray[0];
    let args = command.slice(1);

    let commandFile = client.commands.get(command.slice(prefix.length));
    if(commandFile) commandFile.run(client, message, args);
});

client.login(process.env.CLIENT_TOKEN);