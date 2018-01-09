const StellarSdk = require('stellar-sdk');
const request = require('request');
// create a completely new and unique pair of keys
// see more about KeyPair objects: https://stellar.github.io/js-stellar-sdk/Keypair.html
let pair = StellarSdk.Keypair.random();

console.log(pair.secret());
console.log(pair.publicKey());

request.get({
  url: 'https://horizon-testnet.stellar.org/friendbot',
  qs: { addr: pair.publicKey() },
  json: true
}, function(error, response, body) {
  if (error || response.statusCode !== 200) {
    console.error('ERROR!', error || body);
  }
  else {
    console.log('SUCCESS! You have a new account :)\n', body);

		var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

		// the JS SDK uses promises for most actions, such as retrieving an account
		server.loadAccount(pair.publicKey()).then(function(account) {
		  console.log('Balances for account: ' + pair.publicKey());
		  account.balances.forEach(function(balance) {
		    console.log('Type:', balance.asset_type, ', Balance:', balance.balance);
		  });
		});
  }
});
