const _ = require('lodash');
const Slackbot = require('slackbots');
const token = require('../private/token.js');
// Class
class Bot {
  constructor(name) {
    this.name = name;
    this.token = token;
    this.app_icon = { icon_emoji: ":robot_face:" };
    this.init();
  }
  init() {
    this.slackbot = this.initSlackBot();
    this.initEvents();
  }
  initSlackBot() {
    return new Slackbot({
      name: this.name,
      token: this.token
    });
  }
  initEvents() {
    this.start();
    this.message();
    this.error();
  }
  on(str, cb) {
    this.slackbot.on(str, cb);
  }
  handler (channel, message, cb, params){
    this.on(channel, cb())
  }
  postMessageToChannel(channel, message){
    this.slackbot.bot.postMessageToChannel(channel, message, this.app_icon);
  }
  message() {
    const bot = this.slackbot;
    const params = this.app_icon;

    this.on('message', data => {
      if (data.type !== 'message') { return; }
      if (data.text === 'weather') {
        bot.postMessageToChannel("general", "Well hello right back!", params);
      }
      if (data.text === 'shutdown'){
        console.log(this);
        process.exit();
      }
    })
  }
  start() {
    const bot = this.slackbot;
    const params = this.app_icon;
    this.on('start', () => {
      bot.postMessageToChannel('general', 'Get ready for TMDI', params);
    })
  }
  error() {
    this.on('error', err => { console.log(err) })
  }
}
// Exports 
module.exports = Bot;