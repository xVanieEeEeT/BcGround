const Discord = require("discord.js");
const client = new Discord.Client();

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


client.on('message', vanieeet => {
    if(vanieeet.content == 'فانيت') {
        vanieeet.channel.send('<@>');
    }
});

client.on('message', message => {
    if(!message.channel.guild) return;
 if(message.content.startsWith(prefix + 'bc')) {
 if(!message.channel.guild) return;
 if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**You\'re missing the following permissions: ** `ADMINISTRATOR`' );
 let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
 let BcList = new Discord.Ric34ivhEmbed()
 .setThumbnail(message.author.avatarURL)
 .setColor("RANDOM")
 .setTitle(`**Message content: [ ${args} ] **`)
 .setDescription(`**Embeded broadcast message.📝\nNormal broadcast message.✏ \nYou have 1 minute to choose.**`)
 if (!args) return message.reply('**You need to proivde atleast one word for the broadcast messages. :x:**');message.channel.send(BcList).then(msg => {
 msg.react('📝')
 .then(() => msg.react('✏'))
 .then(() =>msg.react('📝'))
  
 let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
 let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
  
 let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
 let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
  
 EmbedBc.on("collect", r => {
 message.channel.send(`**:ballot_box_with_check: Sent.**`).then(m => m.delete(5000));
 message.guild.members.forEach(m => {
 var bc = new
 Discord.RichEmbed()
 .setColor('RANDOM')
 .setTitle('**New Message. 📬**')
 .addField('» Server.', `**[ ${message.guild.name} ]**`)
 .addField('» Author.', `**[ ${message.author.username} ]**`)
 .addField('» Message.', `**[ ${args} ]**`)
 .setThumbnail('https://cdn.discordapp.com/attachments/473283523219030026/497406214871973889/c95d0db51890800925b66e208974c5fc.png')
 .setFooter(`${client.user.username}`)
 m.send({ embed: bc })
 if(message.attachments.first()){
     m.sendFile(message.attachments.first().url).catch();
 }
 msg.delete();
 })
 })
 NormalBc.on("collect", r => {
   message.channel.send(`**:ballot_box_with_check: Sent.**`).then(m => m.delete(5000));
 message.guild.members.forEach(m => {
 m.send(`${args}\n${m}`);
 if(message.attachments.first()){
m.sendFile(message.attachments.first().url).catch();
 }
 msg.delete();
 })
 })
 })
 }
 });



client.login(process.env.BOT_TOKEN);
