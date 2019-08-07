const Discord = require('discord.js');
const client = new Discord.Client();

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
});

client.login(process.env.CLIENT_TOKEN);