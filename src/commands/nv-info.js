const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    let nvInfoEmbed = new Discord.RichEmbed()
        .setTitle('Clan Information')
        .setColor('#7a0ce8')
        .addField('Server Owner', `${message.guild.owner}\n`)
        .addField('Clan Owner(s)', 'Zahseh, Gaius, Tahha, Zimcro\n')
        .addField('Discord Server Creation Date', `${message.guild.createdAt}\n`)
        .addField('In-game Clan Creation Date', 'nV was created at 3/03/2019\n')
        .addField('Clan Description', 'nV is the top competitive clan in krunker.io, we got 1st place in Krunker Global winning a total of 1.4k dollars and won an overall amount of 1,587 dollars. nV #1')
    return message.channel.send(nvInfoEmbed);
};

module.exports.help = {
    name: 'nv-info'
};