const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    let nvInfoEmbed = new Discord.RichEmbed()
        .setTitle('Clan Information')
        .setColor('#7a0ce8')
        .addField('Server Owner', `${message.guild.owner}`)
        .addField('\u200B', '\u200B')
        .addField('Clan Owner(s)', 'Zahseh, Gaius, Tahha, Zimcro')
        .addField('\u200B', '\u200B')
        .addField('Discord Server Creation Date', `${message.guild.createdAt}`)
        .addField('\u200B', '\u200B')
        .addField('In-game Clan Creation Date', 'nV was created at 3/03/2019')
        .addField('\u200B', '\u200B')
        .addField('Clan Description', 'nV is the top competitive clan in krunker.io, we got 1st place in Krunker Global winning a total of 1.4k dollars and won an overall amount of 1,587 dollars. nV #1')
    return message.channel.send(nvInfoEmbed);
};

module.exports.help = {
    name: 'nv-info'
};