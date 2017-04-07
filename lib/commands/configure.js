var Clapp = require('../modules/clapp-discord');

module.exports = new Clapp.Command({
  name: "configure",
  desc: "configure the bot options by default",
  fn: (argv, context) => {
    // This output will be redirected to your app's onReply function
    return 'This should return  an ok or an error'
  },
  args: [
    {
      name: 'testarg',
      desc: 'A test argument',
      type: 'string',
      required: false,
      default: 'testarg isn\'t defined'
    }
  ],
  flags: [
    {
      name: 'testflag',
      desc: 'A test flag',
      alias: 't',
      type: 'boolean',
      default: false
    }
  ]
});
