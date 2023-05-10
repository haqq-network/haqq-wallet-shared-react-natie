import {Share, ShareEncrypted} from './types';
import BN from 'bn.js';
import {curveN} from './constants';
import {hashPasswordToBN} from './hash-password-to-bn';
import {accountInfo} from '@haqq/provider-web3-utils';

/**
 * encrypt private key with password
 * @param share
 * @param password
 */
export async function encryptShare(
  share: Share,
  password: string,
): Promise<ShareEncrypted> {
  const hash = await hashPasswordToBN(password);
  const nonce = new BN(share.share, 'hex').sub(hash).umod(curveN);

  const {publicKey} = await accountInfo(share.share);

  return {
    nonce: nonce.toString('hex'),
    publicShare: publicKey,
    shareIndex: share.shareIndex,
    polynomialID: share.polynomialID,
  };
}

/**
 * decrypt private key with password
 * @param shareEncrypted
 * @param password
 */
export async function decryptShare(
  shareEncrypted: ShareEncrypted,
  password: string,
): Promise<Share> {
  const userInputHash = await hashPasswordToBN(password);
  const share = new BN(shareEncrypted.nonce, 'hex')
    .add(userInputHash)
    .umod(curveN)
    .toString('hex')
    .padStart(64, '0');

  const info = await accountInfo(share);

  if (info.publicKey !== shareEncrypted.publicShare) {
    throw new Error('Incorrect password');
  }

  return {
    share,
    shareIndex: shareEncrypted.shareIndex,
    polynomialID: shareEncrypted.polynomialID,
  };
}
