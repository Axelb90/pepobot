require('dotenv').config();

const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () =>{
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on('message', msg => {
    if (msg.author.avatar === 'be8f62befaf156f252609cf0a649c138' || msg.author.id == '538130928401252382' || msg.author.username=='pedrobmxx') {
      msg.reply('Cerra el orto');
    }else{
      console.log("lo que tenia : " , msg.author)
    }
});
client.on('user', user => {
    if (user.username === 'pedrobmx') {
      msg.reply('pong');
    }
});

client.login(process.env.DISCORD_TOKEN)