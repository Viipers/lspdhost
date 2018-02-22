const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("/");



bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'Protect and Serve', type : 0}});
    console.log("Bot Ready");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {    

    var say = message.content.substr(5)
    if(message.content.startsWith(prefix+'lspd')) {
            let modRole = message.guild.roles.find("name", "Police");

    if(!message.member.roles.has(modRole.id)) {
        return message.channel.send(":rotating_light::rotating_light: Intrus detecté :rotating_light::rotating_light: Un administrateur sera averti!").catch(console.log(`** !!! ${message.author.username} : ** a essayé d'utilisé la commande lspd sur ${message.guild.name} voici son message: \`${say}\``));

      } 

    if(!message.guild.roles.exists("name", "Police")) {
       return  message.channel.send(":rotating_light::rotating_light: Intrus detecté :rotating_light::rotating_light: Un administrateur sera averti!").catch(console.log(`** !!! ${message.author.username} : ** a essayé d'utilisé la commande lspd sur ${message.guild.name} voici son message: \`${say}\``));
      }


           message.channel.send(`${say}`, {disableEveryone: false})
           message.delete()
           console.log(`**${message.author.username} : ** a utilisé la commande lspd sur ${message.guild.name} voici son message: \`${say}\``)
           bot.guilds.get('396360744687370242').channels.get('398820566070460426').send(`**${message.author.username} : ** a utilisé la commande lspd sur ${message.guild.name} voici son message: \`${say}\``);
              
      }
});
