exports.run = (client, message, args, functions, ownerid, adminsid, permissão, author, Discord, hook, booru, prefix, giphy, ytdl, ytsr, queue, serverQueue, throwError) => {
  var sended = false
  if (message.channel.nsfw === true) {
    var tries = 0
    async function search(tag) {
      if (tries > 9) {
        setTimeout(function() {
        tries = 0
        if (sended == true) return;
        if (sended == false) {
          sended = true
          return message.channel.send('Não achei nenhuma imagem =(');
        } else {
          return;
        }
      }, 1000)
        return;
      }
      var url = null
      if (tag.length == 0) {
        await booru.posts({
          tags: 'rating:explicit'
        }).then(posts => {
          const index = Math.floor(Math.random() * posts.length)
          const post = posts[index]
          url = booru.url(post.large_file_url)
        })

        return url.href;

      } else {

        await booru.posts({
          tags: `${tag} rating:explicit`
        }).then(posts => {
          const index = Math.floor(Math.random() * posts.length)
          const post = posts[index]

          try {
            url = booru.url(post.large_file_url)
          } catch (e) {

          }
        })
      }
      try {
        return url.href;
      } catch (e) {

      }
      if (url == undefined || url == null) {
        tries++
        return sh();
      } else {
        tries = 0
      }
    }
    async function sh() {
      let m = await search(args)
      if (m == 'https://danbooru.donmai.us/') return;
      if (m == undefined || m == null) return;
      setTimeout(function() {
        message.channel.send(m)
      }, 3000)
    }

    sh()

  } else {
    message.channel.send('Você precisa estar em um canal NSFW para executar este commando');
    console.log('\x1b[31m%s\x1b[0m', 'Executed: False');
    return;
  }
  console.log('\x1b[32m%s\x1b[0m', 'Executed: True');
}

module.exports.config = {
  name: 'danbooru',
  description: 'Mostra um hentai randomico do danbooru com a tag especificada. (Tag é opcional)',
  adminOnly: 'Não',
  ownerOnly: 'Não'
}
