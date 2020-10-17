const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;


client.on('ready', () => {
  console.log('켰다.');
client.user.setPresence({ game: { name: 'ch!help' }, status: 'online' })
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == '사용법') {
    return message.reply('o!help 쳐보세요');
  }



if(message.content == 'ch!자리야') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setColor('#ff0000')      
      .addField('**```Hero Name```**', '**```fix\nZarya```**', true)
  .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/755758893619216515/c89ddb9bde2df3b0.png')
      
    message.channel.send(embed)
  }



if(message.content == 'ch!에코') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setColor('#ff0000')
      .addField('```Hero Name```', '**```fix\nEco```**', true)
  .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745823795784188064/unknown.png')
      
    message.channel.send(embed)
  }
if(message.content == 'ch!시메') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setColor('#ff0000')
      .addField('```Hero Name```', '**```fix\nSymmetra```**', true)
  .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745825054855528451/unknown.png')
      
    message.channel.send(embed)
  }

if(message.content == 'ch!정크렛') {
    let img = 'https://cdn.discordapp.com/attachments/757614927489007809/761553353619669012/a_cb475c98cbbd39542742a711016f0689.gif';
    let embed = new Discord.RichEmbed()
      .setColor('#ff0000')
      .addField('```Hero Name```', '**```fix\nJunkrat```**', true)
  .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/758309132910067724/762005694366089236/b11a9d6ed8e66df4.png')
      
    message.channel.send(embed)
  }
if(message.content == 'ch!정크') {
    let img = 'https://cdn.discordapp.com/attachments/757614927489007809/761553353619669012/a_cb475c98cbbd39542742a711016f0689.gif';
    let embed = new Discord.RichEmbed()
      .setColor('#ff0000')
      .addField('```Hero Name```', '**```fix\nJunkrat```**', true)
  .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/758309132910067724/762005694366089236/b11a9d6ed8e66df4.png')
      
    message.channel.send(embed)
  }

if(message.content == 'ch!젠야타') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setColor('#ff0000')
      .addField('```Hero Name```', '```fix\nZenyatta```', true)
  .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745823407073001562/unknown.png')
      
    message.channel.send(embed)
  }
if(message.content == 'ch!야타') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setColor('#ff0000')
      .addField('```Hero Name```', '```fix\nZenyatta```', true)
  .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745823407073001562/unknown.png')
      
    message.channel.send(embed)
  }



if(message.content == 'ch!맥크리') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')

      .addField('```Hero Name```', '**```fix\nMercy```**', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/680260392697724943/742365462847029248/unknown.png')
      
    message.channel.send(embed)
  }

if(message.content == 'ch!호그') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '**```fix\nHog```**', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/755809671960461432/26a92fe290b3e62a.png')
      
    message.channel.send(embed)
  }
if(message.content == 'ch!맥1') {
    let img = 'https://cdn.discordapp.com/attachments/757614927489007809/761553353619669012/a_cb475c98cbbd39542742a711016f0689.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '**```fix\nMac```**', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/757614927489007809/761826440973910036/f4ce55d1e2fa977a.png')
      
    message.channel.send(embed)
  }



if(message.content == 'ch!맥크리1') {
    let img = 'https://cdn.discordapp.com/attachments/757614927489007809/761553353619669012/a_cb475c98cbbd39542742a711016f0689.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '**```fix\nMccree```**', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/757614927489007809/761826440973910036/f4ce55d1e2fa977a.png')
      
    message.channel.send(embed)
  }


if(message.content == 'ch!맥') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '**```fix\nMac```**', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/680260392697724943/742365462847029248/unknown.png')
      
    message.channel.send(embed)
  }

if(message.content == 'ch!위도우') {
    let img = 'https://cdn.discordapp.com/attachments/757614927489007809/761553353619669012/a_cb475c98cbbd39542742a711016f0689.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '```fix\nWidow```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/766317481572564992/766341768533770311/fbf17d9f86b355e3.png')
      
    message.channel.send(embed)
  }


  
if(message.content == 'ch!애쉬') {
    let img = 'https://cdn.discordapp.com/attachments/757614927489007809/761553353619669012/a_cb475c98cbbd39542742a711016f0689.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '```fix\nAshe```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/766317481572564992/766638790403031070/b3580463a316a431.png')
      
    message.channel.send(embed)
  }

 

 if(message.content == 'ch!디바') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '**```fix\nD.va```**', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745822981854462007/unknown.png')
     
    message.channel.send(embed)
  }


if(message.content == 'ch!바스티온') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '**```fix\nBastion```**', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745825054855528451/unknown.png')
     
    message.channel.send(embed)
  }
if(message.content == 'ch!레킹') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '**```fix\nWrecking Ball```**', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745823916567691305/unknown.png')
     
    message.channel.send(embed)
  }

if(message.content == 'ch!레킹볼') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '**```fix\nWrecking Ball```**', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745823916567691305/unknown.png')
     
    message.channel.send(embed)
  }


if(message.content == 'ch!바티') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '```fix\nBaptiste```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745825343855656970/unknown.png')
     
    message.channel.send(embed)
  }

if(message.content == 'ch!메이') {
    let img = 'https://cdn.discordapp.com/attachments/757614927489007809/761553353619669012/a_cb475c98cbbd39542742a711016f0689.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '```fix\nMei```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/757614927489007809/761866378126819338/726a5b0fc7cc49bb.png')
     
    message.channel.send(embed)
  }

if(message.content == 'ch!루시우') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '```fix\nLucio```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745825343855656970/unknown.png')
     
    message.channel.send(embed)
  }
if(message.content == 'ch!둠피') {
    let img = 'https://cdn.discordapp.com/attachments/757614927489007809/761553353619669012/a_cb475c98cbbd39542742a711016f0689.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
   
      .addField('```Hero Name```', '```fix\n흑대장```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/761870125883326474/761938438580076554/13b8407c07fc29f4.png')
     
    message.channel.send(embed)
  }
if(message.content == 'ch!둠피스트') {
    let img = 'https://cdn.discordapp.com/attachments/757614927489007809/761553353619669012/a_cb475c98cbbd39542742a711016f0689.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
   
      .addField('```Hero Name```', '```fix\n흑대장```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/761870125883326474/761938438580076554/13b8407c07fc29f4.png')
     
    message.channel.send(embed)
  }
if(message.content == 'ch!바티스트') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '```fix\nBaptiste```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745823246259060787/unknown.png')
     
    message.channel.send(embed)
  }

if(message.content == 'ch!위도') {
    let img = 'https://cdn.discordapp.com/attachments/757614927489007809/761553353619669012/a_cb475c98cbbd39542742a711016f0689.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '```fix\nWidow```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/766317481572564992/766341768533770311/fbf17d9f86b355e3.png')
    message.channel.send(embed)
  }

if(message.content == 'ch!파라') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '```fix\nPara```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745825449703112774/unknown.png')
    message.channel.send(embed)
  }
if(message.content == 'ch!솔저') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '```fix\nSoldier 76```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745825660861415484/unknown.png')
    message.channel.send(embed)
  }

if(message.content == 'ch!솜브라') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')

      .addField('```Hero Name```', '```fix\nSombra```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745825791354339418/unknown.png')
    message.channel.send(embed)
  }

  if(message.content == 'ch!토르') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '```fix\nTorbjorn```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745825939694419998/unknown.png')
    message.channel.send(embed)
  }


if(message.content == 'ch!한조') {
    let img = 'https://cdn.discordapp.com/attachments/757614927489007809/761553353619669012/a_cb475c98cbbd39542742a711016f0689.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '**```fix\nHanzo```**', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/766317481572564992/766631670505406464/aa6a87b69ac024f1.png')
      
    message.channel.send(embed)
  }

if(message.content == 'ch!리퍼') {
    let img = 'https://cdn.discordapp.com/attachments/757614927489007809/761553353619669012/a_cb475c98cbbd39542742a711016f0689.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '**```fix\nReaper```**', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/757614927489007809/761860983916199936/5520925ef369aa43.png')
      
    message.channel.send(embed)
  }
if(message.content == 'ch!트레') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '```fix\nTracer```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/680260392697724943/742368716490145823/unknown.png')
      
    message.channel.send(embed)
  }

  if(message.content == 'ch!트레이서1') {
    let img = 'https://cdn.discordapp.com/attachments/757614927489007809/761553353619669012/a_cb475c98cbbd39542742a711016f0689.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '```fix\nTracer```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/761869923743825921/761933024589381632/b1f07bd7c42da64f.png') 
    message.channel.send(embed)
  }
  if(message.content == 'ch!트레1') {
    let img = 'https://cdn.discordapp.com/attachments/757614927489007809/761553353619669012/a_cb475c98cbbd39542742a711016f0689.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '```fix\nTracer```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/761869923743825921/761933024589381632/b1f07bd7c42da64f.png')    
    message.channel.send(embed)
  }

if(message.content == 'ch!트레이서') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '```fix\nTracer```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/680260392697724943/742368716490145823/unknown.png')
      
    message.channel.send(embed)
  }


if(message.content == 'ch!겐지') {
    let img = 'https://cdn.discordapp.com/attachments/757614927489007809/761553353619669012/a_cb475c98cbbd39542742a711016f0689.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '**```fix\nGenji```**', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/766317481572564992/766352563665633300/e28237ef68e08881.png')
      
    message.channel.send(embed)
  }


if(message.content == 'ch!아나') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '**```fix\nAna```**', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/755761228940443668/d2e4f82f3771cebb.png')
     
    message.channel.send(embed)
  }

else if(message.content == 'ar!help') 
       {
        let helpImg = 'https://cdn.discordapp.com/attachments/758295936849018912/758338531608363048/ares.gif';
        let commandList = [
       {name: '!ar(영웅이름)', desc: '입력한 영웅에 값을 불러옵니다'},
        ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Ares BOT HELP USER', helpImg)
.setImage('https://cdn.discordapp.com/attachments/758295936849018912/758338531608363048/ares.gif')
  
      .setColor('#ff0000')
      .setTimestamp()

  commandList.forEach(x => {
      
   commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }




        else if(message.content == 'o!help') 
       {
        let helpImg = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
        let commandList = [
          {name: 'o!(사용할 영웅)', desc: '사용할 영웅 값을 보내줍니다.'},
{name: 'o!마우스', desc: '마우스 설정키를 번역 해줍니다.'},
        ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('ORION BOT HELP USER', helpImg)
      .setColor('#fff000')


      .setTimestamp()
    .setImage('https://cdn.discordapp.com/attachments/748535337244033095/748955743461441640/UndetectedSawN.png')

    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  if(message.content.startsWith('!전체공지오리온')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}


client.login(token);
 
