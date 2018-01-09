// Twilio Credentials
const accountSid = 'ACa7ed766d670728b647cf3d7aa17da975';
const authToken = 'dc554a222fe84f7557eb1f28ec359236';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    to: '+17039394950',
    from: '+12405341962',
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
  })
  .then(message => console.log(message.sid));
