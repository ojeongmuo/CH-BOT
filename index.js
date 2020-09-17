const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;


client.on('ready', () => {
  console.log('켰다.');
client.user.setPresence({ game: { name: 'o!help ' }, status: 'online' })
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == '사용법') {
    return message.reply('o!help 쳐보세요');
  }



  if(message.content == 'o!값') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('복붙 하고 영웅 쳐주세용', img, )
      .addField('o!영웅', 'Tom#6666 ', true)
      .setThumbnail(img)
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }
if(message.content == 'o!모이라') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('모이라 트레킹', img, )
      .addField('```Name Moira```', '```Tracking```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/750187350004596799/751115745462714438/0de8f0d1ca764052.png')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }




if(message.content == 'o!겐지') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Genji```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/754982926650966036/6076175114a9e28b.png')
    message.channel.send(embed)
  }



if(message.content == 'o!한국어') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Korea```', '```fix\nUI Korea```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/751096436258504774/751271332959879250/7031ab3335468bcd.png')
    message.channel.send(embed)
  }

  if(message.content == 'o!겐지') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
  
      .addField('```Name Genji```', '```fix\nSilent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/754983363978199061/5b809761145bb018.png')
    message.channel.send(embed)
  }

  if(message.content == 'o!토르비온') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Torbjorn```', '```fix\nSilent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750922731369005083/1.PNG')

    message.channel.send(embed)
  }





  if(message.content == 'o!토르') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')

      .addField('```Name Torbjorn```', '```fix\nSilent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750922731369005083/1.PNG')

    message.channel.send(embed)
  }

  if(message.content == 'o!디바') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')

      .addField('```Name Dva```', '```fix\nTracking```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751029974462627912/Orion_.png')

    message.channel.send(embed)
  }
  

  if(message.content == 'o!바티') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
  
      .addField('```Name Batist```', '```fix\nTracking```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/750187350004596799/751113664806912125/1.png')

    message.channel.send(embed)
  }
  


  
  
  
  
  if(message.content == 'o!리퍼') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')

      .addField('```Name Reaper```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750916385819066388/1.PNG')

    message.channel.send(embed)
  }



  if(message.content == 'o!리퍼') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')

      .addField('```Name Reaper```', '```fix\nSilent shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750916382455234640/2.PNG')

    message.channel.send(embed)
  }



  




  

  if(message.content == 'o!둠피') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')

      .addField('```Name Doom```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750915436043960330/1.PNG')
 
    message.channel.send(embed)
  }



  if(message.content == 'o!둠피') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')

      .addField('```Name Doom```', '```fix\nSilent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750915433141501983/2.PNG')

    message.channel.send(embed)
  }



  if(message.content == 'o!위도우') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')

      .addField('```Name Widow```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/754985831717928990/c9dbedd1138c0029.png')

    message.channel.send(embed)
  }

  
  if(message.content == 'o!위도우') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
 
      .addField('```Name Widow```', '```fix\nSilent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/753624636604022894/ebfc78b1e0196891.png')

    message.channel.send(embed)
  }


  if(message.content == 'o!위도') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')

      .addField('```Name Widow```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/754985831717928990/c9dbedd1138c0029.png')
  
    message.channel.send(embed)
  }

  if(message.content == 'o!위도') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
   
      .addField('```Name Widow```', '```fix\nSilent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/753624636604022894/ebfc78b1e0196891.png')
 
    message.channel.send(embed)
  }


  if(message.content == 'o!한조') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
    
      .addField('```Name Hanzo```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/754983520908345414/bae9099e3ffd40a0.png')

    message.channel.send(embed)
  }


if(message.content == 'o!한조') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')

      .addField('```Name Hanzo```', '```fix\nSilent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/753624471021158450/847acba6ac488b1b.png')

    message.channel.send(embed)
  }
  
  if(message.content == 'o!정크') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
 
      .addField('```Name Junkrat```', '```fix\nSilent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750922388169818142/91e4e2234fb986d6.PNG')

    message.channel.send(embed)
  }
  


  if(message.content == 'o!정크렛') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
 
      .addField('```Name Junkrat```', '```fix\nSilent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750922388169818142/91e4e2234fb986d6.PNG')
   
    message.channel.send(embed)
  }



  if(message.content == 'o!애쉬') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')

      .addField('```Name Ash```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/753623529022292099/2.png')

    message.channel.send(embed)
  }
  

  if(message.content == 'o!애쉬') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')

      .addField('```Name Ash```', '```fix\nSilent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/753623517291085864/bfaeeed5a155f8fc.png')

    message.channel.send(embed)
  }



  



  if(message.content == 'o!파라') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Para```', '```fix\nFlick```', true)

      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750923912828682362/2.PNG')

    message.channel.send(embed)
  }
  



  if(message.content == 'o!파라') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Para```', '```fix\nSilent Shot```', true)
 
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750923912828682362/2.PNG')

    message.channel.send(embed)
  }

  if(message.content == 'o!호그') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Roadhog```', '```fix\nFlick```', true)
  
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751031448357568552/6.PNG')

    message.channel.send(embed)
  }

  if(message.content == 'o!호그') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Roadhog```', '```fix\nSilent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751031245315637351/5.PNG')
    message.channel.send(embed)
  }

  if(message.content == 'o!호그') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Roadhog```', '```fix\nAbilities```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751030870823141416/4.PNG')
    message.channel.send(embed)
  }

  if(message.content == 'o!시그마') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Sigma```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751032950979821578/3.PNG')
    message.channel.send(embed)
  }
  
  if(message.content == 'o!시그마') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Sigma```', '```fix\nShift```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751032952779046912/4.PNG')
    message.channel.send(embed)
  }
  if(message.content == 'o!레킹볼') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name wrecking ball```', '```fix\nTracking```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751033565776707614/c85bfbe6c2e26b88.PNG')
    message.channel.send(embed)
  }

  
  
  if(message.content == 'o!오리사') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Orisa```', '```fix\nTracking```', true)
     
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751034838672211968/1.png')
     
    message.channel.send(embed)
  }
  
  if(message.content == 'o!윈스턴') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Winston```', '```fix\nTracking```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751034526800805988/e1cad039c208f625.PNG')
    message.channel.send(embed)
  }

  if(message.content == 'o!윈스') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Winston```', '```fix\nTracking```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751034526800805988/e1cad039c208f625.PNG')
    message.channel.send(embed)
  }

  if(message.content == 'o!로드호그') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Roadhog```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751031448357568552/6.PNG')
    message.channel.send(embed)
  }

  if(message.content == 'o!로드호그') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Roadhog```', '```fix\nSilent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751031245315637351/5.PNG')
    message.channel.send(embed)
  }


  if(message.content == 'o!로드호그') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Roadhog```', '```fix\nAbilities```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751030870823141416/4.PNG')
    message.channel.send(embed)
  }


  if(message.content == 'o!자리야') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .addField('```Name Zarya```', '```fix\nTracking```', true)
      .setColor('#ffff00')
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751031682265514024/1.png')
    message.channel.send(embed)
  }

  if(message.content == 'o!자리야') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .addField('```Name Zarya```', '```fix\nSilent Shot```', true)
      .setColor('#ffff00')
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751031679602393118/2.png')
    message.channel.send(embed)
  }
  



  if(message.content == 'o!라인') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .addField('```Name Reinhardt```', '```fix\nTracking```', true)
      .setColor('#ffff00')
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751031832799346748/1.png')
    message.channel.send(embed)
  }



  if(message.content == 'o!라인') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .addField('```Name Reinhardt```', '```fix\nAbilities```', true)
      .setColor('#ffff00')
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751031831687594014/2.png')
    message.channel.send(embed)
  }



  if(message.content == 'o!야타') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Zenyatta```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/750187350004596799/751109675134484520/d69b2fb30b9f6f56.png')
    message.channel.send(embed)
  }

  if(message.content == 'o!야타') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Zenyatta```', '```fix\nSilent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/750187350004596799/751110436212179042/2.png')
    message.channel.send(embed)
  }


  if(message.content == 'o!젠야타') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Zenyatta```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/750187350004596799/751109675134484520/d69b2fb30b9f6f56.png')
    message.channel.send(embed)
  }


  if(message.content == 'o!젠야타') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Zenyatta```', '```fix\nSilent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/750187350004596799/751110436212179042/2.png')
    message.channel.send(embed)
  }
  

  if(message.content == 'o!아나') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Ana```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/750187350004596799/751110607159296000/cd069a19bac8b6a0.png')
    message.channel.send(embed)
  }

  if(message.content == 'o!브리') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Brigitte```', '```fix\nTracking```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/750187350004596799/751110716420915330/bb2f285e5e278972.png')
    message.channel.send(embed)
  }


  if(message.content == 'o!브리기테') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Brigitte```', '```fix\nTracking```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/750187350004596799/751110716420915330/bb2f285e5e278972.png')
    message.channel.send(embed)
  }
  



  if(message.content == 'o!맥') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Mac```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/753512186995015781/117c05786350e28a.png')
      message.channel.send(embed)
    }



  if(message.content == 'o!맥') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Mac```', '```fix\nSilent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750917325011812393/2.PNG')
    message.channel.send(embed)
  }

  if(message.content == 'o!맥크리') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name MacCree```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/753512186995015781/117c05786350e28a.png')
    message.channel.send(embed)
  }


  if(message.content == 'o!맥크리') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name MacCree```', '```fix\nSilent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750917325011812393/2.PNG')
    message.channel.send(embed)
  }



  

  if(message.content == 'o!트레') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Tracer```', '```fix\nTracking```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750923242835017788/18d63aca66148a0a.PNG')
    message.channel.send(embed)
  }





  if(message.content == 'o!트레이서') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Tracer```', '```fix\nTracking```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750923242835017788/18d63aca66148a0a.PNG')
    message.channel.send(embed)
  }

  if(message.content == 'o!메이') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name May```', '```fix\nTracking```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750918245615403149/2.PNG')
    message.channel.send(embed)
  }


if(message.content == 'o!솔저') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Soldier```', '```fix\nTracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750918569646096394/1.PNG')
      .setThumbnail(img)
    message.channel.send(embed)
  }


  if(message.content == 'o!솔져') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Soldier```', '```fix\nTracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750918569646096394/1.PNG')
      .setThumbnail(img)
    message.channel.send(embed)
  }


  
  if(message.content == 'o!솜브라') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Sombra```', '```fix\nTracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750920405463859200/1.PNG')
      .setThumbnail(img)
    message.channel.send(embed)
  }
  
  if(message.content == 'o!시메') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Symmetra```', '```fix\nTracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750920787451445419/2.PNG')
      .setThumbnail(img)
    message.channel.send(embed)
  }

  if(message.content == 'o!시메') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Symmetra```', '```fix\nTracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750921031908196502/3.PNG')
      .setThumbnail(img)
    message.channel.send(embed)
  }


  if(message.content == 'o!시메트라') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Symmetra```', '```fix\nTracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750920787451445419/2.PNG')
      .setThumbnail(img)
    message.channel.send(embed)
  }

  if(message.content == 'o!시메트라') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Symmetra```', '```fix\nTracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750921031908196502/3.PNG')
      .setThumbnail(img)
    message.channel.send(embed)

  }
 


  if(message.content == 'o!바스') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Bastion```', '```fix\nTracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750918569646096394/1.PNG')
      .setThumbnail(img)
    message.channel.send(embed)
  }

  if(message.content == 'o!바스티온') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Bastion```', '```fix\nTracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750918569646096394/1.PNG')
      .setThumbnail(img)

    message.channel.send(embed)
  }
if(message.content == 'o!이스터에그') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('개발자가 숨겨놓은 이스터에그를 찾아보시오', img, )
      .addField('```이스터에그```', '```찾아보세요```', true)
      .setThumbnail(img)

    message.channel.send(embed)
  }

  
  if(message.content == 'o!esp') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')

      .addField('```ESP```', '```good Esp```', true)
      .setImage('https://cdn.discordapp.com/attachments/751809877135065120/752076619203477574/esp.png')
      .setThumbnail(img)

    message.channel.send(embed)
  }



 



        else if(message.content == 'o!help') 
       {
        let helpImg = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
        let commandList = [
          {name: 'o!(사용할 영웅)', desc: '사용할 영웅 값을 보내줍니다'},
          {name: 'o!한국어', desc: 'UI 번역을 합니다'},
          {name: 'o!값', desc: '쉽게 복붙 할수있습니다'},
          {name: 'o!이스터에그', desc: '개발자에 이스터에그'},
          {name: 'o!ESP', desc: '예쁜 ESP를 '}, 
        ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('ORION BOT HELP USER', helpImg)
      .setColor('#fff000')

      .setTimestamp()
    
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
 
