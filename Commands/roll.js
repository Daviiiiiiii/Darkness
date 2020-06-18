exports.run = (client, message, args, functions, ownerid, adminsid, permissão, author, Discord, hook, booru, prefix, giphy, ytdl, ytsr, queue, serverQueue, throwError) => {
  var dado = ['1', '2', '3', '4', '5', '6'];
  var randomdado = dado[Math.floor(Math.random() * dado.length)];
  message.channel.send(`:game_die: Resultado: ${randomdado}`);
  console.log('\x1b[32m%s\x1b[0m', 'Executed: True');
}

module.exports.config = {
  name: 'roll',
  description: 'Rola um dado',
  adminOnly: 'Não',
  ownerOnly: 'Não'
}
