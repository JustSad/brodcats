const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**
         *| best invite reword |*
 **السلام عليكم :
جبت لك نظام انفايت مختلف و اسطوري ان شاء الله يعجبكم
1 -  جيب 5 لك 10 الاف كردت
2 -  جيب 15 لك 30 الف كردت
3 -  جيب 50 لك 100 الف كردت
-------------_-
#cmd الي يجيب العدد يروح شات
new ويكتب **
      Trees Community
                                 [ https://discord.gg/4mMy4Xr ] **`)
}).catch(console.error)
})

client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**
      *| best invite reword |*
 **السلام عليكم :
جبت لك نظام انفايت مختلف و اسطوري ان شاء الله يعجبكم
1 -  جيب 5 لك 10 الاف كردت
2 -  جيب 15 لك 30 الف كردت
3 -  جيب 50 لك 100 الف كردت
-------------_-
#cmd الي يجيب العدد يروح شات
new ويكتب **

 
         Trees Community

                                 [ https://discord.gg/4mMy4Xr ] **`)
}).catch(console.error)
})
client.login('NTA2ODQzNzA5Njk5MjYwNDI2.DsgvqQ.XJ81hsghK5SU3oC5OqFYLwddZYM');
