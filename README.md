# Missing TypeScript definitions

[![NPM version][npm-image]][npm-url]

## Installation

```bash
  $ npm i @netgum/types -D
```

## Usage

Add type root(s) to your `tsconfig.json` configuration.

**Example:**
```json
{
  "compilerOptions": {
    "typeRoots": [
      "./node_modules/@netgum/types/node",
      "./node_modules/@netgum/types/react",
      "./node_modules/@netgum/types/react-native"
    ]
  }
}
```

## List of definitions

### `node` type root

* [bn.js](https://npmjs.com/package/bn.js)
* [ethereumjs-tx](https://npmjs.com/package/ethereumjs-tx)
* [ethjs](https://npmjs.com/package/ethjs)
* [ethjs-abi](https://npmjs.com/package/ethjs-abi)
* [idna-uts46-hx](https://npmjs.com/package/idna-uts46-hx)
* [keccak](https://npmjs.com/package/keccak)
* [secp256k1](https://npmjs.com/package/secp256k1)
* [triple-beam](https://npmjs.com/package/triple-beam)

### `react` type root

* [qrcode.react](https://npmjs.com/package/qrcode.react)
* [react-jazzicon](https://npmjs.com/package/react-jazzicon)

### `react-native` type root

* [react-native-qrcode-scanner](https://npmjs.com/package/react-native-qrcode-scanner)
* [react-native-qrcode-svg](https://npmjs.com/package/react-native-qrcode-svg)

## License

The MIT License

[npm-image]: https://badge.fury.io/js/%40netgum%2Ftypes.svg
[npm-url]: https://npmjs.org/package/@netgum/types

