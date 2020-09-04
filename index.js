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

  let embed = new MessageEmbed()
  .setColor("#36393e")
  .setDescription(`Para você executar esse comando, você precisa da permissão \`${permissionObject[perm]}\``)

  let embedBOT = new MessageEmbed()
  .setColor("#36393e")
  .setDescription(`Para você executar esse comando, eu preciso da permissão \`${permissionObject[perm]}\``)

  if(!this.member.hasPermission(this.perm)) return this.client.channels.cache.get(channel).send(embed)
  if(!this.client.channels.cache.get(this.channel).guild.me.hasPermission(this.perm)) return this.client.channels.cache.get(channel).send(embedBOT)

  const class_ = new classes()    
  
  return class_.code()
  
}


module.exports.requestPerm = userPerm