/* Define required modules */
const TelegramBot = require('node-telegram-bot-api');
const follow = require('text-file-follower');
const config = require('./config.json');

// ---------------- Modules ----------------
// server module
const server = require('./modules/server/index');

/* Define variables */
const bot = new TelegramBot(config.teleBotToken, {polling: true});

/* Forwarder */
const logFile = '/var/log/auth.log';
const pattern = /sshd/;
const forwarder = follow(logFile);
forwarder1.on('line', function(filename, line){
  var filtered = line.match(pattern);
  if(filtered){
    bot.sendMessage(config.teleChatID, logFile1 + "\n" + filtered.input);
  }
});

// ---------------- Watchdogs ----------------

// polling_error
const now = Date();
bot.on('polling_error', (error) => {
  console.log(now + error);
});


// ---------------- Init ----------------
server.interface.getPid(function(pid){
  console.log("DEBUG: Interface online. Process PID: " + pid);
  bot.sendMessage(config.teleChatID, "Forwarder interface online. Process PID: " + pid  + ".");
});