exports.run = (client, message, args, functions, ownerid, adminsid, permissão, author, Discord, hook, booru, prefix, giphy, ytdl, ytsr, queue, serverQueue, throwError) => {
  const sQueue = queue.get(message.guild.id);
  const size = sQueue.songs.length
  const avatar = client.user.displayAvatarURL()
  let sArray = []

  for (i = 0; i < size; i++) {
    sArray.push(sQueue.songs[i].title)
  }

  if (size == 1) {
    let embed = new Discord.MessageEmbed()
      .setAuthor('Fila', avatar)
      .setColor('AQUA')
      .setDescription('A fila está vazia!')
      .setTimestamp(message.createdTimestamp)
      return message.channel.send(embed)
  } else {
    let embed = new Discord.MessageEmbed()
      .setAuthor('Fila', avatar)
      .setColor('AQUA')
      .setTimestamp(message.createdTimestamp)
      for (i = 0; i < size; i++) {
        if (i == 0) {
          //Nothing
        } else {
          embed.addField(`${i}ª:`, `${sArray[i]}`, true)
          embed.addField(`Adicionado por:`, `${sQueue.songs[i].requester}`, true)
          embed.addField(`Duração:`, `${sQueue.songs[i].duration}`, false)
        }
      }
      return message.channel.send(embed)
  }
  console.log(sArray)
  console.log('\x1b[32m%s\x1b[0m', 'Executed: True');
}

module.exports.config = {
    name: 'queue',
    description: 'mostra as musicas na fila',
    adminOnly: 'Não',
    ownerOnly: 'Não'
}
