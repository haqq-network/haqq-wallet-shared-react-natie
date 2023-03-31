import BN from 'bn.js';
import {accountInfo, sign} from '@haqq/provider-web3-utils';
import {jsonrpcRequest} from './jsonrpc-request';
import {decrypt, encrypt} from '@haqq/encryption-react-native';
import stringify from 'json-stable-stringify';
import base64 from 'react-native-base64';

async function signMetadata(
  privateKey: BN | string,
  key: string,
  value: string = '',
) {
  const timestamp = +Date.now() / 1000;
  const pk = BN.isBN(privateKey) ? privateKey.toString('hex') : privateKey;

  const signature = await sign(
    pk,
    stringify({
      timestamp,
      value,
    }),
  );

  const {publicKeyUncompressed} = await accountInfo(pk);

  return [publicKeyUncompressed, key, signature, timestamp, value];
}

export async function getMetadataValue(
  host: string,
  privateKey: BN | string,
  key: string,
) {
  const pk = BN.isBN(privateKey) ? privateKey.toString('hex') : privateKey;
  const params = await signMetadata(privateKey, key);

  const result = await jsonrpcRequest<{
    key: string;
    value: string;
  }>(host, 'get', params);

  const value = base64.decode(result.value || '');

  const message = await decrypt<{
    value: any;
  }>(pk, value);
  return message.value;
}

export async function setMetadataValue(
  host: string,
  privateKey: BN | string,
  key: string,
  value: any,
) {
  const message = await encrypt(privateKey.toString('hex'), {value});
  const b64message = base64.encode(message);
  const params = await signMetadata(privateKey, key, b64message);

  const result = await jsonrpcRequest<{
    key: string;
    value: string;
  }>(host, 'set', params);
  return result.key;
}
