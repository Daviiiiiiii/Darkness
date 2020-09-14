exports.run = (client, message, args, functions, ownerid, adminsid, permissão, author, Discord, hook, booru, prefix, giphy, ytdl, ytsr, queue, serverQueue, throwError) => {
  message.channel.send('...')
  console.log('\x1b[32m%s\x1b[0m', 'Executed: True');
}

module.exports.config = {
  name: 'template',
  description: 'uma template de commando',
  adminOnly: 'Não',
  ownerOnly: 'Sim'
}
