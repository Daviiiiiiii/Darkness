exports.run = async (client, message, args, functions, ownerid, adminsid, permissão, author, Discord, hook, booru, prefix, giphy, ytdl, queue, playing, ytsr) => {
  function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' +
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$', 'i');
    return !!pattern.test(str);
  }
  var songInfo = null
  var song = null
  let eArgs = args.join(' ')

  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel)
    return message.channel.send(
      'Você precisa estar em um canal de voz para usar este commando!'
    );

  if (!args[0]) return message.channel.send('Especifique um link ou musica para tocar!');

  if (args[0].startsWith('https://www.youtube.com/watch')) {
    songInfo = await ytdl.getInfo(args[0]);
    var duration = await songInfo.playerResponse.videoDetails.lengthSeconds * 1000
    song = {
      title: songInfo.title,
      url: songInfo.video_url,
    };
  } else {
    const songSearch = await ytsr(eArgs, options = {
      limit: 1
    });
    songInfo = await ytdl.getInfo(songSearch.items[0].link);
    var duration = await songInfo.playerResponse.videoDetails.lengthSeconds * 1000
    song = {
      title: songInfo.title,
      url: songInfo.video_url,
    };
  }

  if (!song) {
    message.channel.send('Algo deu muito errado ( ._.) \n Verifique se você digitou um link valido ou se um vídeo com esse titulo existe');
    console.log('\x1b[31m%s\x1b[0m', 'Executed: False');
    return;
  }
  console.log('A')
  if (playing === false) {
    console.log('B')
    let connection = await voiceChannel.join();
    let dispatcher = await connection.play(ytdl(song.url), {
      filter: 'audioonly'
    });
    console.log('C')

    message.channel.send(`Tocando: ${songInfo.title}`);
    playing = true;

    setTimeout(async function(){
      console.log('D')
      for (i = 0; i < 20; i++) {
        if (queue.get(i)) {
          let dispatcher = await connection.play(ytdl(queue.get(i)), {
            filter: 'audioonly'
          });
        } else {
          setTimeout(function() {voiceChannel.leave(), playing = false}, 120000)
        }
      }}, duration)

    console.log('\x1b[32m%s\x1b[0m', 'Executed: True');
  } else {
    console.log('E')
    for (i = 0; i < 20; i++) {
      if (queue.get(i)) {
        //Nothing
      } else {
        queue.set(i, songInfo.URL);
        break;
      }
    }
  }
}

module.exports.config = {
  name: 'template',
  description: 'uma template de commando',
  adminOnly: 'Não',
  ownerOnly: 'Sim'
}
