exports.run = (client, message, args, functions, ownerid, adminsid, permissão, author, Discord, hook, booru, prefix, giphy, ytdl, ytsr, queue, serverQueue, throwError) => {
  if (message.author.id = ownerid || message.member.hasPermission('ADMINISTRATOR')) {
    message.channel.send('...')
  } else {
    message.channel.send(permissão);
    console.log('\x1b[31m%s\x1b[0m', 'Executed: False');
  }
}

module.exports.config = {
    name: 'templateadmin',
    description: 'uma template de commando para admins',
    adminOnly: 'Não',
    ownerOnly: 'Sim'
}
