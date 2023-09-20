[@haqq/shared-react-native - v0.0.9](README.md) / Exports

# @haqq/shared-react-native - v0.0.9

## Table of contents

### Type Aliases

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

[types.ts:10](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/6c89e3c/src/types.ts#L10)

___

### ShareCreateResponse

Ƭ **ShareCreateResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hex_share` | `string` |

#### Defined in

[types.ts:6](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/6c89e3c/src/types.ts#L6)

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

[types.ts:17](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/6c89e3c/src/types.ts#L17)

___

### SharesResponse

Ƭ **SharesResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isNew` | `boolean` |
| `shares` | [`string`, `string`][] |

#### Defined in

[types.ts:1](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/6c89e3c/src/types.ts#L1)

## Variables

### curveN

• `Const` **curveN**: `BN`

#### Defined in

[constants.ts:3](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/6c89e3c/src/constants.ts#L3)

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

[passworder.ts:67](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/6c89e3c/src/passworder.ts#L67)

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

[share.ts:34](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/6c89e3c/src/share.ts#L34)

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

[passworder.ts:48](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/6c89e3c/src/passworder.ts#L48)

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

[share.ts:12](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/6c89e3c/src/share.ts#L12)

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

[metadata.ts:47](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/6c89e3c/src/metadata.ts#L47)

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

[hash-password-to-bn.ts:4](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/6c89e3c/src/hash-password-to-bn.ts#L4)

___

### jsonrpcRequest

▸ **jsonrpcRequest**<`T`\>(`endpoint`, `method`, `params?`): `Promise`<`T`\>

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

#### Returns

`Promise`<`T`\>

#### Defined in

[jsonrpc-request.ts:3](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/6c89e3c/src/jsonrpc-request.ts#L3)

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

[make-id.ts:1](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/6c89e3c/src/make-id.ts#L1)

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

[metadata.ts:71](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/6c89e3c/src/metadata.ts#L71)

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

[string-to-utf8-bytes.ts:8](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/6c89e3c/src/string-to-utf8-bytes.ts#L8)

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

[to-hex-private-key.ts:3](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/6c89e3c/src/to-hex-private-key.ts#L3)
