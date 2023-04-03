[@haqq/shared-react-native - v0.0.2](README.md) / Exports

# @haqq/shared-react-native - v0.0.2

## Table of contents

### Type Aliases

- [ShareCreateResponse](modules.md#sharecreateresponse)
- [SharesResponse](modules.md#sharesresponse)

### Functions

- [getMetadataValue](modules.md#getmetadatavalue)
- [jsonrpcRequest](modules.md#jsonrpcrequest)
- [setMetadataValue](modules.md#setmetadatavalue)

## Type Aliases

### ShareCreateResponse

Ƭ **ShareCreateResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hex_share` | `string` |

#### Defined in

[types.ts:6](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/0b28d8c/src/types.ts#L6)

___

### SharesResponse

Ƭ **SharesResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isNew` | `boolean` |
| `shares` | [`string`, `string`][] |

#### Defined in

[types.ts:1](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/0b28d8c/src/types.ts#L1)

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

[metadata.ts:46](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/0b28d8c/src/metadata.ts#L46)

___

### jsonrpcRequest

▸ **jsonrpcRequest**<`T`\>(`endpoint`, `method`, `params?`): `Promise`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `endpoint` | `string` | `undefined` |
| `method` | `string` | `undefined` |
| `params` | `any`[] | `[]` |

#### Returns

`Promise`<`T`\>

#### Defined in

[jsonrpc-request.ts:1](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/0b28d8c/src/jsonrpc-request.ts#L1)

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

[metadata.ts:70](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/0b28d8c/src/metadata.ts#L70)
