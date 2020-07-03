const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("728662540883591192")
setInterval(function() {
channel.send(` brymo brymo brymo brymo brymo brymo`);
}, 30)
})

client.login(process.env.BOT_TOKEN);