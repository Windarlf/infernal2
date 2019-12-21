const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = async (client, message, params) => {
  
  let prefix = ayarlar.prefix
 
  if (!params[0]) {
    message.channel.sendCode("asciidoc",`= Akabe Bot Yardım Menüsü =

${prefix}afk <sebep>                  ::  Sunucuda afk olmanızı sağlar ve birisi sizi etiketleyince afk olduğunuzu sebebi ile belirtir.

${prefix}ailemiz                      ::  Serverdaki sişi sayısını gösterir.

${prefix}alıntı <mesaj> <id>          ::  Bir Mesaj Alıntılar.

${prefix}canlı-destek                 ::  Canlı Destek Tablebi Oluşturur.

${prefix}bulanık <@kullanıcı>         ::  Avatarınızı bulanıklaştırıp gösterir.

${prefix}havadurumu <Şehir>           ::  hava durumunu gösterir.

${prefix}istatistik                   ::  Botun istatistik gösterir.

${prefix}rastgeleşifre                ::  random şifre atar.

${prefix}wasted <@kullanıcı>          ::  belirtilen kişiye wasted. efekti ekler

# Komutlar hakkında yardım almak icin ${prefix}yardım `);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.sendCode('asciidoc', `= ${command.help.name} =

Hakkında  :: ${command.help.description}
Kullanım  :: ${prefix}${command.help.usage}`);
    }
  }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Komut kategorilerini gösterir.',
  usage: 'w!yardım'
};