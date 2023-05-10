import BN from 'bn.js';

export function toHexPrivateKey(privateKey: BN | string): string {
  let pk = BN.isBN(privateKey) ? privateKey.toString('hex') : privateKey;

  if (pk.startsWith('0x')) {
    pk = pk.slice(2);
  }

  return pk.padStart(64, '0');
}
