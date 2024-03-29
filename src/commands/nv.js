const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if(!args[0]) return message.reply('Available info: $nv info, $nv logo');

    if(args[0] === 'info') {
        let nvInfoEmbed = new Discord.RichEmbed()
        .setTitle('Clan Information')
        .setColor('#7a0ce8')
        .addField('Server Owner', `${message.guild.owner}`)
        .addField('Clan Owner(s)', 'Zahseh, Gaius, Tahha, Zimcro')
        .addField('Discord Server Creation Date', `${message.guild.createdAt}`)
        .addField('In-game Clan Creation Date', 'nV was created at 3/03/2019')
        .addField('Clan Description', 'nV is the top competitive krunker clan who prides ourselves in hard work and dedication. We have placed 1st in the Wire eSports Krunker Global Tournament, bringing home $1,400. We also competed in the Competitive Krunker 3v3 Summer Kickoff Tournament earning $187.50')
        .setFooter('Coded by byto#9268')
        return message.channel.send(nvInfoEmbed);
    }
    else if (args[0] === 'logo') {
        return message.channel.send('https://media.discordapp.net/attachments/572282129275158548/608514430166106123/image0.png')
    }
    else {return;}
     
};

module.exports.help = {
    name: 'nv'
};