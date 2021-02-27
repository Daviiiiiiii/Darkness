exports.run = (client, message, args, functions, ownerid, adminsid, permissão, author, Discord, hook, booru, prefix, giphy) => {
  if (message.author.id == 473963022742847489) {
    var user = null
    if (args.length == 0) {
      user = null
    } else {
      user = message.mentions.members.first();
    }
    if(!user) {message.channel.send('Cite alguem para eu kickar'); return;}
    message.channel.send('Kickando...')
    user.kick()
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
