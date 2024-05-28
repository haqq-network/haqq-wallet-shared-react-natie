[@haqq/shared-react-native - v0.0.12](../README.md) / [Exports](../modules.md) / JSONRPCError

# Class: JSONRPCError

## Hierarchy

- `Error`

  ↳ **`JSONRPCError`**

## Table of contents

### Constructors

- [constructor](JSONRPCError.md#constructor)

### Properties

- [message](JSONRPCError.md#message)
- [meta](JSONRPCError.md#meta)
- [name](JSONRPCError.md#name)
- [stack](JSONRPCError.md#stack)
- [prepareStackTrace](JSONRPCError.md#preparestacktrace)
- [stackTraceLimit](JSONRPCError.md#stacktracelimit)

### Methods

- [captureStackTrace](JSONRPCError.md#capturestacktrace)

## Constructors

### constructor

• **new JSONRPCError**(`message`, `meta?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta` | [`JSONRPCErrorMetadata`](../modules.md#jsonrpcerrormetadata) |

#### Overrides

Error.constructor

#### Defined in

[src/jsonrpc-request.ts:16](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/42b93a3/src/jsonrpc-request.ts#L16)

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1068

___

### meta

• **meta**: [`JSONRPCErrorMetadata`](../modules.md#jsonrpcerrormetadata)

#### Defined in

[src/jsonrpc-request.ts:15](https://github.com/haqq-network/haqq-wallet-shared-react-native/blob/42b93a3/src/jsonrpc-request.ts#L15)

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1067

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1069

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
