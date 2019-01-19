const Discord = require('discord.js'); //imports D.js library
const client = new Discord.Client({disableEveryone: true}); //defines bot

client.on('ready', () => {  //when bot is ready
  console.log(`Logged in as ${client.user.username}!`);
  client.user.setActivity('Olwin being happy', { type: 'PLAYING' });
}); //sets status to olwin being happy, type playing


client.on('message', async message => { //bot on message
    let prefix = "!!";   //the prefix + command example !ping
    if (message.author.bot) return; //if command sent by the bot itself and other bots, ignore it
    if (!message.content.startsWith(prefix)) return;
    if (message.channel.type !== "text") return; //if command in dms, ignore
    const args = message.content.split(' ');
    let cmd = message.content.toLowerCase().split(' ')[0];
    cmd = cmd.slice(prefix.length)
   //message events
    
   if (cmd === 'say') {
    let tosay = message.content.split(" ").slice(1).join(" ");
    message.delete()
    message.channel.send(tosay)
    }

    if(cmd === `do`) {
      const botowner = ['416617058248425473']
      
          try {
             
             if (!botowner.includes(message.author.id)) return message.channel.send(`This command can only be used Olwin1#0001.`) 
              const args = message.content.split(" ").slice(1);
              let codein = args.join(" ");
              let code = eval(codein);
      
              if (typeof code !== 'string')
                  code = require('util').inspect(code, { depth: 0 });
              message.channel.send('✅ Done :)')
          } catch(e) {
              message.channel.send(`\`\`\`js\n${e}\n\`\`\``)
          }
         
         }
   if (cmd === `ping`) { 
  //calculates bots ping
  message.channel.send(`Hoold on!`).then(m => {

    m.edit(`:ping_pong: **Pong!**
Message edit time is ` + (m.createdTimestamp - message.createdTimestamp) + `ms, Discord API heartbeat is ` + Math.round(client.ping) + `ms.`);

    });

   }
   
   //if command PREFIX + info
 if (cmd ===`info`) {
  message.channel.send(`**Version:** 1.0.0      **Creator:** Olwin1#0001   **Created On:** 6/1/2019`);
  //send bot ran by olwin in current channel
 }

});
  
client.login("NTMxNDUxNjY1MDk4OTk3Nzcw.DxPTHA.S4Qa9jcRazn8RSN11i_tBpHnGlk");

