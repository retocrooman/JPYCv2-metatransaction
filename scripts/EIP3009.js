const { writeFileSync } = require('fs');
const { buildEIP3009Data } = require('./buildEIP3009Data');
const { getPublicKey ,sign } = require('./sign');
const { value, validAfter, validBefore, nonce } = require('./setting');

function main() {
  require('dotenv').config();
  const { PRIVATE_KEY:privateKey, TO_ADDRESS:to } = process.env;
  if(!privateKey) throw new Error('Missing privateKey');
  if(!to) throw new Error('Missing spender');
  const from = getPublicKey(privateKey);
  const data = buildEIP3009Data(from, to);
  const { v, r, s } = sign(privateKey, data);
  writeFileSync('EIP3009.json', JSON.stringify({
    from: from,
    to: to,
    value: value,
    validAfter: validAfter,
    validBefore: validBefore,
    nonce: nonce,
    v: v,
    r: '0x'+r.toString('hex'),
    s: '0x'+s.toString('hex'),
  }, null, 2));
  console.log('create!');
}

main();