# Bot perms, uma sub-livraria compacta.

# Porém, mas o que ela faz?

A package é um simples e compacta sobre permissões de bots, ela retorna caso o bot não tiver uma certa permissão ou o usuario que executou o comando


*Exemplo*

# Obs: Para você usar essa package, você precisará da package: discord.js

```js
const discord = require("discord.js")
const client = new discord.Client();

client.on('message', msg => {
    if(msg.content === "diga oi") {

       const api = require("bot-perms") 

        class codeClass {
        async code() {
            msg.channel.send("oi")
        }
    }

  new api.requestPerm("BAN_MEMBERS",msg.channel.id,msg.member,client,codeClass) // ele irá retornar caso o bot ou o membro não tenha a permissão de banir membros. (todos argumentos são obrigátorios)
  }
})

client.login("token")

```

Todas as permissões estão aqui:

```
ADMINISTRATOR
CREATE_INSTANT_INVITE
KICK_MEMBERS
BAN_MEMBERS
MANAGE_CHANNELS
MANAGE_GUILD
ADD_REACTIONS
VIEW_AUDIT_LOG
PRIORITY_SPEAKER
STREAM
VIEW_CHANNEL
SEND_MESSAGES
SEND_TTS_MESSAGES
MANAGE_MESSAGES
EMBED_LINKS
ATTACH_FILES
READ_MESSAGE_HISTORY
MENTION_EVERYONE
USE_EXTERNAL_EMOJIS
VIEW_GUILD_INSIGHTS
CONNECT 
SPEAK 
MUTE_MEMBERS 
DEAFEN_MEMBERS
MOVE_MEMBERS
USE_VAD 
CHANGE_NICKNAME
MANAGE_NICKNAMES
MANAGE_ROLES
MANAGE_WEBHOOKS
MANAGE_EMOJIS
```
