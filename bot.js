const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "G";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`${client.user.username}`, "https://twitch.tv//9ivv")
    console.log('')
    console.log('')
    console.log('╔[════════════════════════════════════════════════════════════════]╗')
    console.log(`[Start] ${new Date()}`);
    console.log('╚[═════════════════════════════════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════════════════════════════]╗');
    console.log(`Logged i as * [ " ${client.user.username} " ]`);
    console.log('')
    console.log('Informatins :')
    console.log('')
    console.log(`servers! [ " ${client.guilds.size} " ]`);
    console.log(`Users! [ " ${client.users.size} " ]`);
    console.log(`channels! [ " ${client.channels.size} " ]`);
    console.log('╚[════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════]╗')
    console.log(' Bot Is Online')
    console.log('╚[════════════]╝')
    console.log('')
    console.log('')
  });
 client.on('message', message => {
	if(message.author.id === "410778583682777098") {
    if (!message.content.startsWith(prefix)) return;
    var args = message.content.split(' ').slice(1);
    var argresult = args.join(' ');


    if (message.content.startsWith(prefix + 'setwatch')) {
    client.user.setActivity(argresult, {type: 'WATCHING'})
       console.log('test' + argresult);
      message.channel.sendMessage(`Watching Now: **${argresult}**`)
  }


    if (message.content.startsWith(prefix + 'setlis')) {
    client.user.setActivity(argresult, {type: 'LISTENING'})
       console.log('test' + argresult);
      message.channel.sendMessage(`LISTENING Now: **${argresult}**`)
  }


  if (message.content.startsWith(prefix + 'setname')) {
    client.user.setUsername(argresult).then
        message.channel.sendMessage(`Username Changed To **${argresult}**`)
    return message.reply(".");
  }

  if (message.content.startsWith(prefix + 'setavatar')) {
    client.user.setAvatar(argresult);
     message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
  }

  if (message.content.startsWith(prefix + 'setstream')) {
    client.user.setGame(argresult, "https://www.twitch.tv/9ivv");
       console.log('test' + argresult);
      message.channel.sendMessage(`Streaming: **${argresult}**`)
  }
  if (message.content.startsWith(prefix + 'setplay')) {
    client.user.setGame(argresult);
       console.log('test' + argresult);
      message.channel.sendMessage(`Playing: **${argresult}**`)
  }
	}

 });


 client.on('message', message => {
	if(message.author.id === "474175378118803466") {
    if (!message.content.startsWith(prefix)) return;
    var args = message.content.split(' ').slice(1);
    var argresult = args.join(' ');


    if (message.content.startsWith(prefix + 'setwatch')) {
    client.user.setActivity(argresult, {type: 'WATCHING'})
       console.log('test' + argresult);
      message.channel.sendMessage(`Watching Now: **${argresult}**`)
  }


    if (message.content.startsWith(prefix + 'setlis')) {
    client.user.setActivity(argresult, {type: 'LISTENING'})
       console.log('test' + argresult);
      message.channel.sendMessage(`LISTENING Now: **${argresult}**`)
  }


  if (message.content.startsWith(prefix + 'setname')) {
    client.user.setUsername(argresult).then
        message.channel.sendMessage(`Username Changed To **${argresult}**`)
    return message.reply(".");
  }

  if (message.content.startsWith(prefix + 'setavatar')) {
    client.user.setAvatar(argresult);
     message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
  }

  if (message.content.startsWith(prefix + 'setstream')) {
    client.user.setGame(argresult, "https://www.twitch.tv/9ivv");
       console.log('test' + argresult);
      message.channel.sendMessage(`Streaming: **${argresult}**`)
  }
  if (message.content.startsWith(prefix + 'setplay')) {
    client.user.setGame(argresult);
       console.log('test' + argresult);
      message.channel.sendMessage(`Playing: **${argresult}**`)
  }
	}

 });

 client.on('message', message => {
    if(!message.channel.guild) return;
 if(message.content.startsWith(prefix + 'bc')) {
 if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
 if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
 let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
 let BcList = new Discord.RichEmbed()
 .setThumbnail(message.author.avatarURL)
 .setAuthor(`محتوى الرساله [ ${args} ]`)
 .setDescription(`برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست`)
 if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
 msg.react('📝')
 .then(() => msg.react('✏'))
 .then(() =>msg.react('📝'))
  
 let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
 let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
  
 let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
 let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
  
 EmbedBc.on("collect", r => {
 message.guild.members.forEach(m => {
 var bc = new
 Discord.RichEmbed()
 .setColor('RANDOM')
   .setTitle("New Message")
 .addField('Server : ', `${message.guild.name}`)
 .addField('Author : ',`${message.author.username}`)
.addField('Message :', `${args}\n${m}`)
 .setThumbnail(message.author.avatarURL)
 m.send({ embed: bc })
 msg.delete();
 message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
 })
 })
 NormalBc.on("collect", r => {
 message.guild.members.forEach(m => {
 m.send(`${args}\n${m}`);
 msg.delete();
 message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));

 })
 })
 })
 }
 });

client.login(process.env.BOT_TOKEN);
