exports.run = (client, message, args, functions, ownerid, adminsid, permissão, author, Discord, hook, booru, prefix, giphy, ytdl, ytsr, queue, serverQueue, throwError) => {
  if (args[0]) {
    let command = args[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      var embed = new Discord.MessageEmbed()
        .setColor(000000)
        .setAuthor('Darkness Help', client.user.displayAvatarURL)
        .setDescription(`O prefixo do bot é: ${prefix} \n\n**Comando:** ${command.config.name}\n**Descrição:** ${command.config.description || 'Sem descrição'}\n**Apenas admins?** ${command.config.adminOnly}`)
      message.channel.send(embed);
    }
  } else if (!args[0]) {
    let embed = new Discord.MessageEmbed()
      .setAuthor('Help', client.user.displayAvatarURL)
      .setColor(000000)
      .setDescription(`${message.author.username} te enviei no privado!`)

    let Sembed = new Discord.MessageEmbed()
      .setColor(000000)
      .setAuthor('Darkness Bot', client.user.displayAvatarURL())
      .setThumbnail(message.guild.iconURL())
      .setTimestamp()
      .setDescription(`Estes são os commandos disponiveis! \n O prefixo é: ${prefix} \n \n Para obter informações sobre um comando use ">help (comando)"`)
      .addField('Commandos:', '``danbooru`` ``egles`` ``help`` ``info`` ``ping`` ``quente`` ``roles`` ``roll`` ``play`` ``skip`` ``stop``')
      .setFooter('Darkness Bot', client.user.displayAvatarURL())
    message.channel.send(embed).then(msg => {
      msg.delete(options = {
        timeout: 5000
      })
    })
    message.author.send(Sembed)
  }
  console.log('\x1b[32m%s\x1b[0m', 'Executed: True');
}

module.exports.config = {
  name: 'help',
  description: 'Mostra os commandos disponiveis.',
  adminOnly: 'Não',
  ownerOnly: 'Não'
}
