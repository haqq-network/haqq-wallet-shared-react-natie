[@haqq/shared-react-native - v0.0.3](README.md) / Exports

# @haqq/shared-react-native - v0.0.3

## Table of contents

### Type Aliases

- [ShareCreateResponse](modules.md#sharecreateresponse)
- [SharesResponse](modules.md#sharesresponse)

### Functions

- [getMetadataValue](modules.md#getmetadatavalue)
- [jsonrpcRequest](modules.md#jsonrpcrequest)
- [makeID](modules.md#makeid)
- [setMetadataValue](modules.md#setmetadatavalue)

## Type Aliases

### ShareCreateResponse

Ƭ **ShareCreateResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hex_share` | `string` |

#### Defined in

[types.ts:6](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/c1d4630/src/types.ts#L6)

___

### SharesResponse

Ƭ **SharesResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isNew` | `boolean` |
| `shares` | [`string`, `string`][] |

#### Defined in

[types.ts:1](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/c1d4630/src/types.ts#L1)

## Functions

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

[metadata.ts:46](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/c1d4630/src/metadata.ts#L46)

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

[jsonrpc-request.ts:3](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/c1d4630/src/jsonrpc-request.ts#L3)

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

[make-id.ts:1](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/c1d4630/src/make-id.ts#L1)

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

[metadata.ts:70](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/c1d4630/src/metadata.ts#L70)
