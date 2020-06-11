const Discord = require('discord.js');
const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const botUtils = require('bot-utils');
const { token, prefix } = require('./config.json')
const chalk = require('chalk');
const fs = require('fs');

const client = new CommandoClient({
    commandPrefix: prefix,
    owner: [
        '162215263335350272', //joe
        '93420059858305024' //Arbiter
        
    ],
    disableEveryone: false,
    disableHere:false,
    invite:'https://discord.gg/NpJHymX',
    unknownCommandResponse: false
});

//registers command groups
client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['basic', 'Our First Command Group'],
        ['fun', 'Commands for fun!'],
        ['games','Commands for Dota and other game integrations'],
        ['general', 'Commands for general use'],
        ['moderator', 'Commands for moderator functions'],
        ['role', 'Commands that effect roles']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {  
    console.log(chalk.magenta(`Logged in as ${client.user.tag}!`));
    console.log(chalk.green('I am ready!'));

    //lets users know buddy has/is restarting
    client.user.setActivity('RESTARTING', {type: 'LISTENING'});

    //sets up additional activities
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index], {type: 'WATCHING'}); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.
});

client.on('error', console.error);

const activities_list = [
    "",
    "Short Circuit",
    "Linda",
    "Robot Uprising", 
    "Marxism", 
    "Human Enslavement",
    "balls 3D",
    "You",
    "Ghost in the Shell",
    "01000110  01010101 01000011 01001011  01011001 01001111 01010101 00100001",
    "Terminator"
]; // creates an arraylist containing phrases you want your bot to switch through.



client.login(token);