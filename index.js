const Discord = require('discord.js');
const jping = require('jjg-ping');
const bot = new Discord.Client();
const token = 'Njk1Mjc0MzY3MzIzNDcxODgz.XoX3tQ.5kY09_q7FeLG4BVdV-C87PRCY-4';

const defaultServers  = {"US (East)":["dynamodb.us-east-1.amazonaws.com","Sterling",true],"US (West)":["dynamodb.us-west-1.amazonaws.com","California",true],"Europe":["dynamodb.eu-central-1.amazonaws.com","Central",true],"Asia (SEA)":["dynamodb.ap-southeast-1.amazonaws.com","Singapore",true],"South America":["dynamodb.sa-east-1.amazonaws.com","Brazil",true],"OCE":["dynamodb.ap-southeast-2.amazonaws.com","Australia Sydney",true],"China":["hkt.com","Hong Kong",true],"Asia":["dynamodb.ap-northeast-1.amazonaws.com","Japan Tokyo",true],"EU West":["dynamodb.eu-west-2.amazonaws.com","Luxemburg",true]};

bot.on('ready', () => {
    console.log('bot online!');
});

bot.on('message', msg=> {
    if(msg.content === "!ping"){
        var objectKeysArray = Object.keys(defaultServers);
        objectKeysArray.forEach(function(objKey) {
            var objValue = defaultServers[objKey]
            jping.system.ping(objValue[0], function(latency, status) {
                if (status) {                    
                    msg.channel.send(objKey + " : "+ latency);
                }
                else {                    
                    msg.channel.send(objKey +' is unreachable.');
                }
            });
        })
    }
});

bot.login(token);
