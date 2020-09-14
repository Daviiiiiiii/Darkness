exports.run = (client, message, args, functions, ownerid, adminsid, permissão, author, Discord, hook, booru, prefix, giphy, ytdl, ytsr, queue, serverQueue, throwError) => {
  let op = args[0].toLowerCase();
  let nargs = args.slice(1)
  let b64 = nargs.join(' ');
  b64 = b64.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  let ft = null;
  let st = null;

  if (op == 'decode' || op == 'decodificar') {
    ft = 'Base64';
    st = 'Tradução';
    let base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    if (base64regex.test(b64)) {
      let buf = new Buffer.from(b64, 'base64');
      var trnt = buf.toString('ascii');
      console.log('\x1b[32m%s\x1b[0m', 'Executed: True');
    } else {
      message.channel.send('Você não proveu uma string de base64 válida!').then(msg => {
        msg.delete(options = {
          timeout: 5000
        })
      })
    }
  } else if (op == 'encode' || op == 'codificar') {
    ft = 'Texto';
    st = 'Tradução';
    let buf = new Buffer.from(b64);
    var trnt = buf.toString('base64');
  } else {
    message.channel.send('Você não especificou se quer decodificar ou codificar a string \n exemplo: ">b64 encode oi" ou ">b64 decode b2k="').then(msg => {
      msg.delete(options = {
        timeout: 10000
      })
    })
    return;
  }

  if (trnt) {
    let embed = new Discord.MessageEmbed()
      .setColor(000000)
      .setAuthor(`Base64: ${op}`, client.user.displayAvatarURL())
      .setTimestamp()
      .setDescription(`**${ft}:** ${b64} \n **${st}:** ${trnt}`)
      .setFooter('Darkness Bot', client.user.displayAvatarURL())
    message.channel.send(embed)
  } else {
    message.channel.send('Algo deu errado :(')
  }
}

module.exports.config = {
  name: 'base64',
  description: 'traduz uma string em base64 para texto',
  adminOnly: 'Não',
  ownerOnly: 'Não'
}
