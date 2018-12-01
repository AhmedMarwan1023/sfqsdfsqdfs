const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(Logged in as ${client.user.tag}!);
});


client.on('ready', async() => {
var server = "518481035063984129"; // ايدي السررفر
var channel = "518494413274611732";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo , ')
    },305);
})

client.login(process.env.BOT_TOKEN);
