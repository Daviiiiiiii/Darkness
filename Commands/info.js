exports.run = (client, message, args, functions, ownerid, adminsid, permissão, author, Discord, hook, booru, prefix, giphy, ytdl, ytsr, queue, serverQueue, throwError) => {
  var user = null
  if (args.length == 0) {
    user = message.author;
  } else {
    user = message.mentions.users.first();
  }
  if (!user) {
    message.channel.send('Cite alguem para eu mostrar informações.');
    return;
  }
  var datastring2 = user.createdAt.toString().split(' ');
  var bot = 'Não';
  if (user.bot == true) {
    bot = 'Sim';
  }
  let embed = new Discord.MessageEmbed()
    .setAuthor(`${user.username} Info`, user.displayAvatarURL)
    .setThumbnail(user.displayAvatarURL)
    .setColor('RANDOM')
    .addField('Nome:', user.username, true)
    .addField('Discriminator:', user.discriminator, true)
    .addField('Status:', user.presence.status, true)
    .addField('Bot?', bot, true)
    .addField('Criado em:', datastring2[2] + ', ' + datastring2[1] + ' ' + datastring2[3], true)
    .setThumbnail(user.displayAvatarURL)
  message.channel.send(embed);
  console.log('\x1b[32m%s\x1b[0m', 'Executed: True');
}

module.exports.config = {
  name: 'info',
  description: 'Mostra informações de um usuario.',
  adminOnly: 'Não',
  ownerOnly: 'Não'
}
