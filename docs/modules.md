[@haqq/shared-react-natie - v0.0.1](README.md) / Exports

# @haqq/shared-react-natie - v0.0.1

## Table of contents

### Functions

- [getMetadataValue](modules.md#getmetadatavalue)
- [jsonrpcRequest](modules.md#jsonrpcrequest)
- [setMetadataValue](modules.md#setmetadatavalue)

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

[metadata.ts:28](https://github.com/haqq-network/haqq-wallet-shared-react-natie/blob/807ee50/src/metadata.ts#L28)

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

[jsonrpc-request.ts:1](https://github.com/haqq-network/haqq-wallet-shared-react-natie/blob/807ee50/src/jsonrpc-request.ts#L1)

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

[metadata.ts:42](https://github.com/haqq-network/haqq-wallet-shared-react-natie/blob/807ee50/src/metadata.ts#L42)
