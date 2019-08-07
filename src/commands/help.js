const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    let helpEmbed = new Discord.RichEmbed()
        .setTitle('Help Documentation')
        .setColor('#7a0ce8')
        .addField('help', 'Displays this message.')
        .addField('nv <argument>', 'Displays different types of information about nV depending the argument that you use.')
        .setFooter('coded by byto#9268')
    message.channel.send(helpEmbed);
};

module.exports.help = {
    name: 'help'
};