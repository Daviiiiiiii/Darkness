exports.run = (client, message, args, functions, ownerid, adminsid, permissão, author, Discord, hook, booru, prefix, giphy, ytdl, ytsr, queue, serverQueue, throwError) => {
  if (message.member.hasPermission('MANAGE_ROLES')) {
    if (args.length == 0) {
      let roles = message.guild.roles.array()
      var stringRoles = roles.map(function(roles) {
        return roles['name'];
      });
      stringRoles[0] = ' '
      let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.guild.name} Roles`, client.user.displayAvatarURL)
        .setColor('RANDOM')
        .addField('Roles:', stringRoles, true)
      message.channel.send(embed);
    } else {
      let rolesMentioned = message.mentions.roles.array()
      let role = rolesMentioned[0]

      if (role) {
        let roleID = role.id;
        let membersWithRole = role.members.array();
        if (membersWithRole.length != 0) {
          let embed = new Discord.MessageEmbed()
            .setAuthor(`${role.name}`, client.user.displayAvatarURL)
            .setColor('RANDOM')
            .addField('Membros com este cargo:', membersWithRole, true)
          message.channel.send(embed);
        } else {
          message.channel.send('Ninguem possui esse cargo!')
        }
      } else {
        message.channel.send('Esse cargo não existe!, lembre-se de citar o cargo com @.')
      }
    }
    console.log('\x1b[32m%s\x1b[0m', 'Executed: True');
  } else {
    return message.channel.send('Você precisa ter a permissão de gerenciar cargos pra usar este commando!')
  }
}

module.exports.config = {
  name: 'roles',
  description: 'mostra os cargos existentes no server, ou quem possui um cargo especifico',
  adminOnly: 'Sim',
  ownerOnly: 'Não'
}
