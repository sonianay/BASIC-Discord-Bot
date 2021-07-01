const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'ENTER YOUR OWN TOKEN :))';

const PREFIX = '!'; //Part of argument user response operation

bot.on('ready', () => {
    console.log('!tnemyolped rof ydaer si samohT');    
})

bot.on('message', message=>{

    var version = '1.0.3';
    
    /*
    if(msg.content === 'Hello!'){  //Most basic way for bot to respond to user
        msg.reply('!pussaW')
    } */

    
    
    let args = message.content.substring(PREFIX.length).split(" ");  //Second way to respond to user with args

    switch(args[0]){

        case 'help':
            message.channel.send('');
            break;

        case 'ping':
            message.channel.send('pong!'); 
            break;

        case 'info':
            message.channel.send('This bot was created in order to help its upbringer learn more JS surrounding bots.');
            break;
        
        case 'infoVersion':
            message.channel.send('This bot is under patch ' + version + '.');
            break;
        
    } 

    
    //var prefix = '!';  //Third way to respond to user simply by using an if statement
    //var version = '1.0.3';
    
    //if(message.content === prefix + 'fortnite'){
    //    message.reply('Fortnite is bad');  
    //}

    //if(msg === prefix + 'info'){
    //    message.channel.send('Inverse Thomas the Train is a bot created to help its upbringer experiment more with JS.');
    //}

    //else if(msg === prefix + 'info version'){
    //    message.channel.send('The current version of this bot is ' + version + '.');
    //}

    //else if(msg === prefix + 'help'){
    //    message.channel.send('Commands for this bot include : "!info" for information on the bot, "!info version" for information on the current patch of the bot,  ');
    //}
})

bot.login(token);
