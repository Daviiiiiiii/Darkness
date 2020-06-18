exports.run = (client, message, args, functions, ownerid, adminsid, permissão, author, Discord, hook, booru, prefix, giphy, ytdl, ytsr, queue, serverQueue, throwError) => {
  message.channel.send(`Está com calor?, deixe me ligar os ventiladores! \n 卐卐卐卐卐卐卐卐卐卐`);
  console.log('\x1b[32m%s\x1b[0m', 'Executed: True');
}

module.exports.config = {
  name: 'quente',
  description: 'Liga os ventiladores.',
  adminOnly: 'Não',
  ownerOnly: 'Não'
}
