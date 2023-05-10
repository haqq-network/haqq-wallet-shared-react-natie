[@haqq/shared-react-native - v0.0.5](README.md) / Exports

# @haqq/shared-react-native - v0.0.5

## Table of contents

### Type Aliases

- [Share](modules.md#share)
- [ShareCreateResponse](modules.md#sharecreateresponse)
- [ShareEncrypted](modules.md#shareencrypted)
- [SharesResponse](modules.md#sharesresponse)

### Functions

- [decryptShare](modules.md#decryptshare)
- [encryptShare](modules.md#encryptshare)
- [getMetadataValue](modules.md#getmetadatavalue)
- [jsonrpcRequest](modules.md#jsonrpcrequest)
- [makeID](modules.md#makeid)
- [setMetadataValue](modules.md#setmetadatavalue)

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

[types.ts:10](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/b396cdc/src/types.ts#L10)

___

### ShareCreateResponse

Ƭ **ShareCreateResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hex_share` | `string` |

#### Defined in

[types.ts:6](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/b396cdc/src/types.ts#L6)

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

[types.ts:17](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/b396cdc/src/types.ts#L17)

___

### SharesResponse

Ƭ **SharesResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isNew` | `boolean` |
| `shares` | [`string`, `string`][] |

#### Defined in

[types.ts:1](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/b396cdc/src/types.ts#L1)

## Functions

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

[share.ts:34](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/b396cdc/src/share.ts#L34)

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

[share.ts:12](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/b396cdc/src/share.ts#L12)

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

[metadata.ts:46](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/b396cdc/src/metadata.ts#L46)

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

[jsonrpc-request.ts:3](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/b396cdc/src/jsonrpc-request.ts#L3)

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

[make-id.ts:1](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/b396cdc/src/make-id.ts#L1)

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

[metadata.ts:70](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/b396cdc/src/metadata.ts#L70)
