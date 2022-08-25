const { chainId, verifyingContract, name, version, value, nonce, validAfter, validBefore } = require('./setting');
const { EIP712Domain, TransferWithAuthorization } = require('./types')

const buildEIP3009Data = (from, to) => ({
  primaryType: 'TransferWithAuthorization',
  types: { EIP712Domain, TransferWithAuthorization },
  domain: { name, version, chainId, verifyingContract},
  message: { from, to, value, validAfter, validBefore, nonce},
});

module.exports = {
  buildEIP3009Data
}