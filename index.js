const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});


client.on('message', message => {
  if (message.content === 'mytetrio') {
    message.reply('https://ch.tetr.io/u/tteokbokki');
  }

  if (message.content === 'myjstris') {
    message.reply('https://jstris.jezevec10.com/u/%EB%96%A1%EB%B3%B6%EC%9D%B4');
}

  if (message.content === 'myrs') {
    message.reply('https://r6.op.gg/users/tteokbokkise-5fc1ee47bc780320b1229e8f');
  }
});
  client.login('NzgxNzUzMjEyOTgxMzQ2MzA1.X8COag.iM3pXtHfyaH9jIKxag9xPKdPq1E');
