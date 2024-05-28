[@haqq/shared-react-native - v0.0.12](README.md) / Exports

# @haqq/shared-react-native - v0.0.12

## Table of contents

### Classes

- [JSONRPCError](classes/JSONRPCError.md)

### Type Aliases

- [JSONRPCErrorMetadata](modules.md#jsonrpcerrormetadata)
- [Share](modules.md#share)
- [ShareCreateResponse](modules.md#sharecreateresponse)
- [ShareEncrypted](modules.md#shareencrypted)
- [SharesResponse](modules.md#sharesresponse)

### Variables

- [curveN](modules.md#curven)

### Functions

- [decryptPassworder](modules.md#decryptpassworder)
- [decryptShare](modules.md#decryptshare)
- [encryptPassworder](modules.md#encryptpassworder)
- [encryptShare](modules.md#encryptshare)
- [getMetadataValue](modules.md#getmetadatavalue)
- [hashPasswordToBN](modules.md#hashpasswordtobn)
- [jsonrpcRequest](modules.md#jsonrpcrequest)
- [makeID](modules.md#makeid)
- [setMetadataValue](modules.md#setmetadatavalue)
- [stringToUtf8Bytes](modules.md#stringtoutf8bytes)
- [toHexPrivateKey](modules.md#tohexprivatekey)

## Type Aliases

### JSONRPCErrorMetadata

Ƭ **JSONRPCErrorMetadata**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `headers?` | `Headers` |
| `rawBody?` | `string` |
| `request?` | { `endpoint`: `string` ; `method`: `string` ; `params`: `any`[]  } |
| `request.endpoint` | `string` |
| `request.method` | `string` |
| `request.params` | `any`[] |
| `status?` | `number` |
| `statusText?` | `string` |

#### Defined in

[src/jsonrpc-request.ts:3](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/42b93a3/src/jsonrpc-request.ts#L3)

___

### Share

Ƭ **Share**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name?` | `string` |
| `polynomialID` | `string` |
| `share` | `string` |
| `shareIndex` | `string` |

#### Defined in

[src/types.ts:10](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/42b93a3/src/types.ts#L10)

___

### ShareCreateResponse

Ƭ **ShareCreateResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hex_share` | `string` |

#### Defined in

[src/types.ts:6](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/42b93a3/src/types.ts#L6)

___

### ShareEncrypted

Ƭ **ShareEncrypted**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name?` | `string` |
| `nonce` | `string` |
| `polynomialID` | `string` |
| `publicShare` | `string` |
| `shareIndex` | `string` |

#### Defined in

[src/types.ts:17](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/42b93a3/src/types.ts#L17)

___

### SharesResponse

Ƭ **SharesResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isNew` | `boolean` |
| `shares` | [`string`, `string`][] |

#### Defined in

[src/types.ts:1](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/42b93a3/src/types.ts#L1)

## Variables

### curveN

• `Const` **curveN**: `BN`

#### Defined in

[src/constants.ts:3](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/42b93a3/src/constants.ts#L3)

## Functions

### decryptPassworder

▸ **decryptPassworder**<`T`\>(`password`, `encryptedString`): `Promise`<`T`\>

Decrypts an encrypted JS object (encryptedString)
using a password (and AES decryption with native libraries)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `password` | `string` | Password used for decryption |
| `encryptedString` | `string` | String to decrypt |

#### Returns

`Promise`<`T`\>

- Promise resolving to decrypted data object

#### Defined in

[src/passworder.ts:67](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/42b93a3/src/passworder.ts#L67)

___

### decryptShare

▸ **decryptShare**(`shareEncrypted`, `password`): `Promise`<[`Share`](modules.md#share)\>

decrypt private key with password

#### Parameters

| Name | Type |
| :------ | :------ |
| `shareEncrypted` | [`ShareEncrypted`](modules.md#shareencrypted) |
| `password` | `string` |

#### Returns

`Promise`<[`Share`](modules.md#share)\>

#### Defined in

[src/share.ts:34](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/42b93a3/src/share.ts#L34)

___

### encryptPassworder

▸ **encryptPassworder**<`T`\>(`password`, `object`): `Promise`<`string`\>

Encrypts a JS object using a password (and AES encryption with native libraries)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `password` | `string` | Password used for encryption |
| `object` | `T` | Data object to encrypt |

#### Returns

`Promise`<`string`\>

- Promise resolving to stringified data

#### Defined in

[src/passworder.ts:48](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/42b93a3/src/passworder.ts#L48)

___

### encryptShare

▸ **encryptShare**(`share`, `password`): `Promise`<[`ShareEncrypted`](modules.md#shareencrypted)\>

encrypt private key with password

#### Parameters

| Name | Type |
| :------ | :------ |
| `share` | [`Share`](modules.md#share) |
| `password` | `string` |

#### Returns

`Promise`<[`ShareEncrypted`](modules.md#shareencrypted)\>

#### Defined in

[src/share.ts:12](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/42b93a3/src/share.ts#L12)

___

### getMetadataValue

▸ **getMetadataValue**(`host`, `privateKey`, `key`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `string` |
| `privateKey` | `string` \| `BN` |
| `key` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/metadata.ts:47](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/42b93a3/src/metadata.ts#L47)

___

### hashPasswordToBN

▸ **hashPasswordToBN**(`message`): `Promise`<`BN`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`Promise`<`BN`\>

#### Defined in

[src/hash-password-to-bn.ts:4](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/42b93a3/src/hash-password-to-bn.ts#L4)

___

### jsonrpcRequest

▸ **jsonrpcRequest**<`T`\>(`endpoint`, `method`, `params?`, `abortSignal?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `endpoint` | `string` | `undefined` |
| `method` | `string` | `undefined` |
| `params` | `any`[] | `[]` |
| `abortSignal?` | `AbortSignal` | `undefined` |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/jsonrpc-request.ts:23](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/42b93a3/src/jsonrpc-request.ts#L23)

___

### makeID

▸ **makeID**(`length`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

`string`

#### Defined in

[src/make-id.ts:1](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/42b93a3/src/make-id.ts#L1)

___

### setMetadataValue

▸ **setMetadataValue**(`host`, `privateKey`, `key`, `value`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `string` |
| `privateKey` | `string` \| `BN` |
| `key` | `string` |
| `value` | `any` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/metadata.ts:71](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/42b93a3/src/metadata.ts#L71)

___

### stringToUtf8Bytes

▸ **stringToUtf8Bytes**(`input`): `number`[]

convert string to byte array

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`number`[]

Byte array like for input string

#### Defined in

[src/string-to-utf8-bytes.ts:8](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/42b93a3/src/string-to-utf8-bytes.ts#L8)

___

### toHexPrivateKey

▸ **toHexPrivateKey**(`privateKey`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `string` \| `BN` |

#### Returns

`string`

#### Defined in

[src/to-hex-private-key.ts:3](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/42b93a3/src/to-hex-private-key.ts#L3)
