exports.run = (client, message, args, functions, ownerid, adminsid, permissão, author, Discord, hook, booru, prefix, giphy, ytdl, ytsr, queue, serverQueue, throwError) => {
  const sQueue = queue.get(message.guild.id);
  const size = sQueue.songs.length
  const avatar = client.user.displayAvatarURL()
  let song = sQueue.songs[0]

  if (size == 0) {
    return message.channel.send('Não estou tocando nada!')
  } else {
    let embed = new Discord.MessageEmbed()
      .setAuthor('Atualmente tocando!', avatar)
      .setThumbnail(song.thumb)
      .setColor('AQUA')
      .setDescription(`**[${song.title}](${song.url})**`)
      .setURL(song.url)
      .addField(`Duração:`, `${song.duration}`, true)
      .addField(`Adicionado por:`, `${song.requester}`, true)
      .setTimestamp(message.createdTimestamp)
    return message.channel.send(embed);
    console.log('\x1b[32m%s\x1b[0m', 'Executed: True');
  }
}
module.exports.config = {
  name: 'playing',
  description: 'mostra a musica que está atualmente tocando',
  adminOnly: 'Não',
  ownerOnly: 'Não'
}
