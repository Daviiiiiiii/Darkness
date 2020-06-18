exports.run = (client, message, args, functions, ownerid, adminsid, permissão, author, Discord, hook, booru, prefix, giphy) => {
  function search () {
    giphy.search('anime hug').then(function (res) {
      var array = res.data
      var result = array[Math.floor(Math.random()*array.length)]
      var title = result.title.toLowerCase()
      send(title, result)
      console.log('Ciclo')
    })
  }

  search()

  function send(giftitle, result) {
    if (giftitle.includes('anime') || giftitle.includes('cartoon') || giftitle.includes('otaku')) {
      var image = result.embed_url
      let embed = new Discord.RichEmbed()
      .setColor(000000)
      .setAuthor('Darkness Bot', client.user.displayAvatarURL)
      .setImage(image)
      .setTimestamp()
      .setFooter('Darkness Bot', client.user.displayAvatarURL)
      message.channel.send(embed)
    } else {
      search()
    }
  }

  console.log('\x1b[32m%s\x1b[0m', 'Executed: True');
}

module.exports.config = {
    name: 'giphy',
    description: 'WIP',
    adminOnly: 'Não',
    ownerOnly: 'Sim'
}
