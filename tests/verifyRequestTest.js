const tokenize = require('../util/tokenizer');
const verify = require('../util/verifyRequest');

const test1 = tokenize("userSeed: send (receiverId)");
const test2 = tokenize("userSeed: summary");
const test3 = tokenize("userSeed: deposit (cardNum, cardExpDate, cardSC, billingZip, amount)");

console.log('test1 passed: ' + verify(test1) );
console.log('test2 passed: ' + verify(test2) );
console.log('test3 passed: ' + verify(test3) );
