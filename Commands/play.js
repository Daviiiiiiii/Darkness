exports.run = async (client, message, args, functions, ownerid, adminsid, permissão, author, Discord, hook, booru, prefix, giphy, ytdl, ytsr, queue, serverQueue, throwError) => {
  function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' +
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$', 'i');
    return !!pattern.test(str);
  }
  const queue1 = new Map();
  const avatar = message.author.displayAvatarURL()
  const requester = message.author.username + '#' + message.author.discriminator
  var songInfo = null
  var song = null
  let eArgs = args.join(' ')

  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel) {
    let m = message.channel.send('Você precisa estar em um canal de voz para usar este commando!')
      .then(msg => {
        msg.delete(options = {
          timeout: 5000
        })
      })
    throw throwError('No voice channel', 'play');
    return;
  }
  if (!args[0]){
    message.channel.send('Especifique um link ou musica para tocar!');
    throw throwError('No song specified', 'play');
    return;
  }

  if (args[0].startsWith('https://www.youtube.com/watch')) {
    songInfo = await ytdl.getInfo(args[0]);
    let thumb = await songInfo.playerResponse.videoDetails.thumbnail.thumbnails;

    let likes = await songInfo.likes;
    if (likes == null) {likes = '0'};
    let dislikes = await songInfo.dislikes;
    if (dislikes == null) {dislikes = '0'};


    let lengthSec = await songInfo.length_seconds;
    lengthSec = parseInt(lengthSec);

    let minutes = Math.floor(lengthSec / 60);
    let seconds = lengthSec - minutes * 60;
    if (seconds.toString().length == 1) {
      seconds = '0' + seconds.toString()
    };

    let lengthForm = `${minutes}:${seconds}`
    song = {
      title: songInfo.title,
      url: songInfo.video_url,
      thumb: thumb[3].url,
      views: songInfo.playerResponse.videoDetails.viewCount,
      author: songInfo.playerResponse.videoDetails.author,
      likes: likes,
      dislikes: dislikes,
      requester: requester,
      duration: lengthForm,
    };
  } else {
    const songSearch = await ytsr(eArgs, options = {
      limit: 2
    });
    if (songSearch.items[0].link.toString().includes('https://www.youtube.com/user')) {
      songInfo = await ytdl.getInfo(songSearch.items[1].link);
    } else {
      songInfo = await ytdl.getInfo(songSearch.items[0].link);
    }
    let thumb = await songInfo.playerResponse.videoDetails.thumbnail.thumbnails;

    let likes = await songInfo.likes;
    if (likes == null) {likes = '0'};
    let dislikes = await songInfo.dislikes;
    if (dislikes == null) {dislikes = '0'};


    let lengthSec = await songInfo.length_seconds;
    lengthSec = parseInt(lengthSec);

    let minutes = Math.floor(lengthSec / 60);
    let seconds = lengthSec - minutes * 60;
    if (seconds.toString().length == 1) {
      seconds = '0' + seconds.toString()
    };

    let lengthForm = `${minutes}:${seconds}`

    song = {
      title: songInfo.title,
      url: songInfo.video_url,
      thumb: thumb[3].url,
      views: songInfo.playerResponse.videoDetails.viewCount,
      author: songInfo.playerResponse.videoDetails.author,
      likes: likes,
      dislikes: dislikes,
      requester: requester,
      duration: lengthForm,
    };
  }

  if (!serverQueue) {
    const queueContruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };

    queue.set(message.guild.id, queueContruct);

    queueContruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueContruct.connection = connection;
      play(message.guild, queueContruct.songs[0], true);
    } catch (err) {
      throw throwError(err.message, 'play')
      queue.delete(message.guild.id);
      return message.channel.send(err);
    }
  } else {
    serverQueue.songs.push(song);
    let embed = new Discord.MessageEmbed()
      .setAuthor('Foi adicionado a fila!', avatar)
      .setThumbnail(song.thumb)
      .setColor('AQUA')
      .setDescription(`**[${song.title}](${song.url})**`)
      .setURL(song.url)
      .addField('**Views**', `${song.views}`, true)
      .addField('**Autor**', `${song.author}`, true)
      .addField('**Avaliação**', `👍 ${song.likes}   👎${song.dislikes}`, true)
      .setTimestamp(message.createdTimestamp)
    return message.channel.send(embed);
  }

  function play(guild, song, message) {
    const serverQueue = queue.get(guild.id);
    if (message == true) {
      let embed = new Discord.MessageEmbed()
        .setAuthor('Tocando', avatar)
        .setThumbnail(song.thumb)
        .setColor('AQUA')
        .setDescription(`**[${song.title}](${song.url})**`)
        .setURL(song.url)
        .addField('**Views**', `${song.views}`, true)
        .addField('**Autor**', `${song.author}`, true)
        .addField('**Avaliação**', `👍 ${song.likes}   👎${song.dislikes}`, true)
        .setTimestamp(message.createdTimestamp)
      serverQueue.textChannel.send(embed);
      console.log('\x1b[32m%s\x1b[0m', 'Executed: True');
    }
    if (!song) {
      serverQueue.voiceChannel.leave();
      queue.delete(guild.id);
      return;
    }
    const dispatcher = serverQueue.connection
      .play(ytdl(song.url))
      .on("finish", () => {
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0], false);
      })
      .on("error", error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
  }
}


module.exports.config = {
  name: 'play',
  description: 'toca uma musica no seu canal de voz atual',
  adminOnly: 'Não',
  ownerOnly: 'Não'
}
