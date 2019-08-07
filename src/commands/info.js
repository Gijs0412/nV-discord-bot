const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    let infoEmbed = new Discord.RichEmbed()
        .setTitle('Bot Information')
        .setColor('#ffffff')
        .addField('Language', 'JavaScript')
        .addField('Library', 'discord.js')
        .addField('About nVBot', 'nVbot is the official bot for the nV krunker.io clan.')
        .setFooter('Coded by: Byto')
    return message.channel.send(infoEmbed);
};

module.exports.help = {
    name: 'info'
};