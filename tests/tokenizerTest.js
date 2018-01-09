const tokenize = require('../util/tokenizer');

const test1 = "userSeed: send (receiverId)"
const test2 = "userSeed: summary"
const test3 = "userSeed: deposit (cardNum, cardExpDate, cardSC, billingZip, amount)"

console.log('test1 passed: ' + (tokenize(test1) !== undefined) )
console.log(tokenize(test1))
console.log('test2 passed: ' + (tokenize(test2) !== undefined) )
console.log(tokenize(test2))
console.log('test3 passed: ' + (tokenize(test3) !== undefined) )
console.log(tokenize(test3))
