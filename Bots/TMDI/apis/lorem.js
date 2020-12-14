const Slackbot = require("slackbots");
const axios = require("axios");


module.exports = {
  getLorem: () => {
    axios.get("http://loripsum.net/api/1/short/plaintext").then(res => {
      const lorem = res.data;

      bot.postMessageToChannel(
        "general",
        `Here is your Lorem Ipsum: ${lorem}`,
        params
      );
    });
  }
};
