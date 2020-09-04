
let textStringUser = "Para você executar esse comando, você precisa da permissão \`{perm}\`"
let textStringBOT = "Para você executar esse comando, eu preciso da permissão \`{perm}\`"


function setUserText(text) {
  const text_ = String(text)

  textStringUser = text_.toString()
}

function setBotText(text) {
  const text_ = String(text)

  textStringBOT= text_.toString()
}


function userPerm(perm,channel,member,client,classes) {
  this.perm = perm
  this.channel = channel
  this.member = member
  this.client = client

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

  let userVerify = textStringUser
  let botVerify = textStringBOT

  while(userVerify.includes("{perm}")) {
    userVerify = userVerify.replace("{perm}",permissionObject[perm])
  }

  while(botVerify.includes("{perm}")) {
    botVerify = botVerify.replace("{perm}",permissionObject[perm])
  }

  let embed = new MessageEmbed()
  .setColor("#36393e")
  .setDescription(userVerify)

  let embedBOT = new MessageEmbed()
  .setColor("#36393e")
  .setDescription(botVerify)

  if(!this.member.hasPermission(this.perm)) return this.client.channels.cache.get(channel).send(embed)
  if(!this.client.channels.cache.get(this.channel).guild.me.hasPermission(this.perm)) return this.client.channels.cache.get(channel).send(embedBOT)

  const class_ = new classes()    
  
  return class_.code()
  
}


module.exports.requestPerm = userPerm
module.exports.setUserText = setUserText
module.exports.setBotText = setBotText