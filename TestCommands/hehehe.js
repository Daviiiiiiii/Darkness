exports.run = (client, message, args, functions, ownerid, adminsid, permissão, author, id) => {
  function first(p) {for(var i in p)return p[i];}
  console.log('\x1b[32m%s\x1b[0m', 'Executed: True');
  var ala = message.mentions.members.array()
  var rMember = ala[0]
  let role = args[2]
  let gRole = message.guild.roles.find(role => role.name === "Bots");
  if(rMember.roles.has(gRole.id));
  rMember.removeRole(gRole.id)
}
