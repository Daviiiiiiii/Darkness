exports.run = (client, message, args, functions, ownerid, adminsid, permissão, author, Discord, hook, booru, prefix, giphy, ytdl, ytsr, queue, serverQueue, throwError) => {
  if (message.channel.nsfw === true) {
    function search(tag) {
      if (args.length == 0) {
        booru.posts({
          tags: 'rating:explicit'
        }).then(posts => {
          const index = Math.floor(Math.random() * posts.length)
          const post = posts[index]
          const url = booru.url(post.large_file_url)
          if (url.href == 'https://danbooru.donmai.us/') {
            throw throwError('Algo deu errado =(', 'danbooru');
            return;
          }
          return url.href;
        })
      } else {
        booru.posts({
          tags: `${tag} rating:explicit`
        }).then(posts => {
          const index = Math.floor(Math.random() * posts.length)
          const post = posts[index]
          if (post == undefined) {
            throw throwError('Não achei nenhuma imagem =(', 'danbooru');
            return;
          }
          const url = booru.url(post.large_file_url)
          return url.href;
        })
      }
    }
    if (args.length == 0) {
      booru.posts({
        tags: 'rating:explicit'
      }).then(posts => {
        const index = Math.floor(Math.random() * posts.length)
        const post = posts[index]
        const url = booru.url(post.large_file_url)
        if (url.href == 'https://danbooru.donmai.us/') {
          message.channel.send('Algo deu errado =(');
          console.log('\x1b[31m%s\x1b[0m', 'Executed: False');
          return;
        }
        message.channel.send(url.href)
        console.log('\x1b[32m%s\x1b[0m', 'Executed: True');
      })
    } else {
      if (args.includes('furry') || args.includes('Furry') || args.includes('yiff') || args.includes('Yiff')) {
        message.channel.send('Yiff é coisa de doente, sai daqui.');
        throw throwError('Yiff', 'danbooru');
        return;
      }
      booru.posts({
        tags: `${args} rating:explicit`
      }).then(posts => {
        const index = Math.floor(Math.random() * posts.length)
        const post = posts[index]
        if (post == undefined) {
          message.channel.send('Não achei nenhuma imagem =(');
          return;
        }
        const url = booru.url(post.large_file_url)
        if (url.href == 'https://danbooru.donmai.us/') {
          message.channel.send('Não achei nenhuma imagem =(');
          console.log('\x1b[31m%s\x1b[0m', 'Executed: False');
          return;
        }
        message.channel.send(url.href)
        console.log('\x1b[32m%s\x1b[0m', 'Executed: True');
      })
    }
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
