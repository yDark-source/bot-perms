
let textStringUser = "Para você executar esse comando, você precisa da permissão \`{perm}\`"
let textStringBOT = "Para você executar esse comando, eu preciso da permissão \`{perm}\`"

function userPerm(perm,channel,member,client,classes,object) {
  this.perm = perm
  this.channel = channel
  this.member = member
  this.client = client
  this.object = object

  if(typeof this.object !== 'object')  {
    this.object = {ignoreBot: false,ignoreUser: false,color: "#36393e",textUser: textStringUser,textBot: textStringBOT}
  }

  const { MessageEmbed } = require("discord.js")

  const permissionObject = {
    "ADMINISTRATOR": "ADMINISTRADOR",
"CREATE_INSTANT_INVITE": "CRIAR CONVITE INSTANTÂNEO",
"KICK_MEMBERS": "KICKAR MEMBROS",
"BAN_MEMBERS": "BANIR MEMBROS",
"MANAGE_CHANNELS": "GERENCIAR CANAIS",
"MANAGE_GUILD": "GERENCIAR O SERVIDOR",
"ADD_REACTIONS": "ADICIONAR REAÇÕES",
"VIEW_AUDIT_LOG": "VER REGISTRO DE AUDITORIA",
"PRIORITY_SPEAKER": "VOZ PRIORITÁRIA",
"STREAM": "Transmitir",
"VIEW_CHANNEL": "VER CANAL",
"SEND_MESSAGES": "ENVIAR MENSAGENS",
"SEND_TTS_MESSAGES": "ENVIAR MENSAGENS DE VOZ",
"MANAGE_MESSAGES": "GERENCIAR MENSAGENS",
"EMBED_LINKS": "LINKS DE EMBED",
"ATTACH_FILES": "ANEXAR ARQUIVOS",
"READ_MESSAGE_HISTORY": "VER REGISTRO DE MENSAGENS",
"MENTION_EVERYONE": "MENCIONAR TODO MUNDO",
"USE_EXTERNAL_EMOJIS": "USAR EMOJIS EXTERNOS",
"VIEW_GUILD_INSIGHTS": "VER AS INSIGHTS DO SERVIDOR",
"CONNECT": "CONECTAR",
"SPEAK": "FALAR",
"MUTE_MEMBERS": "SILENCIAR MEMBROS",
"DEAFEN_MEMBERS": "DEAFEN_MEMBERS",
"MOVE_MEMBERS": "MOVER MEMBROS",
"USE_VAD": "USAR DETECÇÃO DE VOZ",
"CHANGE_NICKNAME": "MUDAR APELIDO",
"MANAGE_NICKNAMES": "GERENCIAR APELIDOS",
"MANAGE_ROLES": "GERENCIAR CARGOS",
"MANAGE_WEBHOOKS": "GERENCIAR WEBHOOKS",
"MANAGE_EMOJIS": "GERENCIAR EMOJIS"
  }

  let userVerify = this.object.textUser
  let botVerify = this.object.textBot

  while(userVerify.includes("{perm}")) {
    userVerify = userVerify.replace("{perm}",permissionObject[perm])
  }

  while(botVerify.includes("{perm}")) {
    botVerify = botVerify.replace("{perm}",permissionObject[perm])
  }

  let embed = new MessageEmbed()
  .setDescription(userVerify)
  if(typeof this.object.color === 'string') {
    embed.setColor(this.object.color)
    }

  let embedBOT = new MessageEmbed()
  if(typeof this.object.color === 'string') {
  embedBOT.setColor(this.object.color)
  }
  embedBOT.setDescription(botVerify)

  if(this.object.ignoreUser ===  true) {

  if(!this.member.hasPermission(this.perm)) return this.client.channels.cache.get(channel).send(embed)

  }


  if(this.object.ignoreBot !== true) {

  if(!this.client.channels.cache.get(this.channel).guild.me.hasPermission(this.perm)) return this.client.channels.cache.get(channel).send(embedBOT)
  
}

  const class_ = new classes()    
  
  return class_()
  
}


module.exports.requestPerm = userPerm