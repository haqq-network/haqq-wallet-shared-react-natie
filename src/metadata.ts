import BN from 'bn.js';
import {accountInfo, sign} from '@haqq/provider-web3-utils';
import {jsonrpcRequest} from './jsonrpc-request';
import stringify from 'json-stable-stringify';
import base64 from 'react-native-base64';
import {stringToUtf8Bytes} from './string-to-utf8-bytes';
import {decryptPassworder, encryptPassworder} from './passworder';
import {toHexPrivateKey} from './to-hex-private-key';

async function signMetadata(
  privateKey: BN | string,
  key: string,
  value: string = '',
) {
  const timestamp = Math.floor(+Date.now() / 1000);
  const pk = toHexPrivateKey(privateKey);

  const message = stringToUtf8Bytes(
    stringify({
      timestamp,
      value,
    }),
  );

  const hash = Buffer.from(
    [
      25, 69, 116, 104, 101, 114, 101, 117, 109, 32, 83, 105, 103, 110, 101,
      100, 32, 77, 101, 115, 115, 97, 103, 101, 58, 10,
    ].concat(stringToUtf8Bytes(String(message.length)), message),
  ).toString('hex');

  const signature = await sign(pk, hash);

  const {publicKeyUncompressed} = await accountInfo(pk);

  return [
    publicKeyUncompressed.startsWith('0x')
      ? publicKeyUncompressed.slice(2)
      : publicKeyUncompressed,
    key,
    signature.startsWith('0x') ? signature.slice(2) : signature,
    timestamp,
    value,
  ];
}

export async function getMetadataValue(
  host: string,
  privateKey: BN | string,
  key: string,
) {
  const pk = toHexPrivateKey(privateKey);
  const params = await signMetadata(pk, key);

  const result = await jsonrpcRequest<{
    key: string;
    value: string;
  }>(host, 'get', params);

  if (!result?.value) {
    return null;
  }
  const value = base64.decode(result.value);

  const message = await decryptPassworder<{
    value: any;
  }>(pk, value);
  return message?.value ?? null;
}

export async function setMetadataValue(
  host: string,
  privateKey: BN | string,
  key: string,
  value: any,
) {
  const pk = toHexPrivateKey(privateKey);
  const message = await encryptPassworder(pk, {value});
  const b64message = base64.encode(message);
  const params = await signMetadata(pk, key, b64message);

  const result = await jsonrpcRequest<{
    key: string;
    value: string;
  }>(host, 'set', params);
  return result.key;
}
