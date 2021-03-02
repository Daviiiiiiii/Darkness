exports.run = (client, message, args, functions, ownerid, adminsid, permissão, author, Discord, hook, booru, prefix, giphy, ytdl, ytsr, queue, serverQueue, throwError) => {
  let ping = (message.createdTimestamp - Date.now())
  let api = client.ws.ping
  let internet = ''
  let embed = new Discord.MessageEmbed()
  .setAuthor('Pong!', 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/ping-pong_1f3d3.png')
  .setColor('GREEN')
  .setDescription(`💻 Sua latência com o bot é: \`${ping}ms\`. \n 📡 A API está com \`${api}ms\` de latência.`)
  .setTimestamp(message.createdTimestamp)
  message.channel.send(embed);
  console.log('\x1b[32m%s\x1b[0m', 'Executed: True');
}

module.exports.config = {
  name: 'ping',
  description: 'Pinga o bot para ver se existe problemas de latencia.',
  adminOnly: 'Não',
  ownerOnly: 'Não'
}
