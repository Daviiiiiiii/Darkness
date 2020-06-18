exports.run = (client, message, args, functions, ownerid, adminsid, permissão, author, Discord, hook, booru, prefix, giphy, ytdl, ytsr, queue, serverQueue, throwError) => {
  var ping = (message.createdTimestamp - Date.now())
  var internet = ''
  if (parseInt(ping) > 50) {
    internet = (`:snail: Sua internet é deveras merda. \`${author.username}\``);
  } else {
    internet = (':zap: Internet top em.');
  }
  message.channel.send(`:ping_pong: Pong! \`${ping}ms\` \n ${internet}`);
  console.log('\x1b[32m%s\x1b[0m', 'Executed: True');
}

module.exports.config = {
  name: 'ping',
  description: 'Pinga o bot para ver se existe problemas de latencia.',
  adminOnly: 'Não',
  ownerOnly: 'Não'
}
