exports.run = (client, message, args, functions, ownerid, adminsid, permissão, author, Discord, hook, booru, prefix, giphy, ytdl, ytsr, queue, serverQueue, throwError) => {
  var frasesegles = ['Desce aqui que eu te meto a porrada!', 'Não mexe comigo que eu só meto golpe baixo.', 'chi-chi pow!!!', 'Desce aqui e fala na minha cara cuzão!!', 'Vo da um socão na sua canela cuzão!!!', 'tu ta me tirando cuzão?!!', 'Sempre que eu atravesso a rua eu vo correndo, porque ai eu pego impulso pra subir a calçada.', 'Sou um pequeno grande homem!', 'O que vem de baixo não me atinge... não, pera'];
  var randomegles = frasesegles[Math.floor(Math.random() * frasesegles.length)];
  hook(message.channel, 'Égles', randomegles, 'b20000', 'https://i.imgur.com/Da93ntK.png')
  console.log('\x1b[32m%s\x1b[0m', 'Executed: True');
}

module.exports.config = {
  name: 'egles',
  description: 'Mostra uma frase randomica do anão mais divertido do brasil.',
  adminOnly: 'Não',
  ownerOnly: 'Não'
}
