const { writeFileSync } = require('fs');
const { buildEIP2612Data } = require('./buildEIP2612Data');
const { getPublicKey ,sign } = require('./sign');
const { value, deadline } = require('./setting');

function main() {
  require('dotenv').config();
  const { PRIVATE_KEY:privateKey, SPENDER_ADDRESS:spender } = process.env;
  if(!privateKey) throw new Error('Missing privateKey');
  if(!spender) throw new Error('Missing spender');
  const owner = getPublicKey(privateKey);
  const data = buildEIP2612Data(owner, spender);
  const { v, r, s } = sign(privateKey, data);
  writeFileSync('EIP2612.json', JSON.stringify({
    owner: owner,
    spender: spender,
    value: value,
    deadline: deadline,
    v: v,
    r: '0x'+r.toString('hex'),
    s: '0x'+s.toString('hex'),
  }, null, 2));
  console.log('create!');
}

main();