const { chainId, verifyingContract, name, version, value, nonce, deadline } = require('./setting');
const { EIP712Domain, Permit } = require('./types')

const buildEIP2612Data = (owner, spender) => ({
  primaryType: 'Permit',
  types: { EIP712Domain, Permit },
  domain: { name, version, chainId, verifyingContract},
  message: { owner, spender, value, nonce, deadline},
});

module.exports = {
  buildEIP2612Data
}