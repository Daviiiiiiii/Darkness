exports.run = (client, message, args, functions, ownerid, adminsid, permissão, author, id) => {
  async function a() {
  let array = client.guilds.array()
  let y = array.find(x => x.id === '519585953178976257')
  let textarray = y.channels
  let z = textarray.find(x => x.id === '519689403564556298')
  let w = await y.fetchInvites()
  console.log(y.name)
  console.log(z.name)
  console.log(w)
  console.log('yay')
  }
  a()
}

module.exports.config = {
    name: 'muahaha',
    description: 'seila',
    adminOnly: 'Sim',
    ownerOnly: 'Sim'
}
