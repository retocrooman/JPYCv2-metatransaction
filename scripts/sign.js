const ethSigUtil = require('eth-sig-util');
const { fromRpcSig, toBuffer } = require('ethereumjs-util');
const Wallet = require('ethereumjs-wallet').default;

const getPublicKey = (privateKey) => {
  const keyBuffer = toBuffer(privateKey);
  const wallet = Wallet.fromPrivateKey(keyBuffer);
  return wallet.getAddressString();
}

const sign = (privateKey, data) => {
  const keyBuffer = toBuffer(privateKey);
  const signature = ethSigUtil.signTypedMessage(keyBuffer, {
    data,
  });
  return fromRpcSig(signature);
}

module.exports = {
  getPublicKey,
  sign,
}