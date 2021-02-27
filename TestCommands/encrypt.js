exports.run = (client, message, args, functions, ownerid, adminsid, permissão, author, Discord, hook, booru, prefix, giphy) => {
  if (!message.author.id == '473963022742847489') {message.channel.send(permissão); return;}
  var input = args[0]
  var outputArray = []
  var encryptedArray = []

  if (args[2]) {
  var pass = args[1]
  }

  if (pass) {
    console.log(`Mensagem: ${input} \n Senha: ${pass}`)
  } else {
    console.log(`Mensagem: ${input}`)
  }

  /////Separando Letras
  var s = input;
  var chars = []
  for (var i = 0; i < s.length; i++) {
    chars.push(s.charAt(i))
  }
  /////

  console.log('Iniciando Operação!') //Debug

  /////Encriptando

  //Conversão Em Numero
  for (i = 0; i < chars.length; i = i + 1) {
    let target = chars[i] //Escolhendo Letra Alvo

    let output = target.charCodeAt(0) - 97 //Atribuindo Numero Na Letra
    outputArray.push(output) //Inserindo Valor No Array
  }

  //Operações
  for (i = 0; i < outputArray.length; i = i + 1) {
    let target2 = outputArray[i]

    let output2 = (target2*258)

    encryptedArray.push(output2)
  }
  /////

  console.log(` Pronto! \n Output: ${encryptedArray}`)
  message.channel.send(`Resultado: ${encryptedArray.join()}`)

  console.log('\x1b[32m%s\x1b[0m', 'Executed: True');
}

module.exports.config = {
    name: 'encrypt',
    description: 'Encripta mensagens. Exemplo: >encrypt (mensagem)',
    adminOnly: 'Não',
    ownerOnly: 'Sim'
}
