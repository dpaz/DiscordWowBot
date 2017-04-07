var Clapp = require('../modules/clapp-discord');

module.exports = new Clapp.Command({
  name: "helloGuild",
  desc: "Say Hello to the Guild",
  fn: (argv, context) => {
    // This output will be redirected to your app's onReply function
    return 'Hello members of Last Wipe';
  }
});
