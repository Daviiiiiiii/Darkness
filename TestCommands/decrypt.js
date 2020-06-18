exports.run = (client, message, args, functions, ownerid, adminsid, permissão, author, Discord, hook, booru, prefix, giphy) => {
  if (!message.author.id == '473963022742847489') {message.channel.send(permissão); return;}
  var rawInput = args[0]
  var input = rawInput.split(',')
  var decryptedArray = []

  /////Decriptando

  //Operações
  for (i = 0; i < input.length; i = i + 1) {
    let target = input[i]

    let output = (target/258)
    decryptedArray.push(output)
  }
  console.log(decryptedArray)
  message.channel.send(`${decryptedArray} \n Agora conte as letras do alfabeto :P`)
  /////
  console.log('\x1b[32m%s\x1b[0m', 'Executed: True');
}

module.exports.config = {
    name: 'encrypt',
    description: 'Decripta mensagens. Exemplo: >decrypt (mensagem)',
    adminOnly: 'Não',
    ownerOnly: 'Sim'
}
