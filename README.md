# NetGum Types

[![NPM version][npm-image]][npm-url]

> Missing TypeScript definitions

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
      "./node_modules/@netgum/types/ink",
      "./node_modules/@netgum/types/node",
      "./node_modules/@netgum/types/react",
      "./node_modules/@netgum/types/react-native"
    ]
  }
}
```

## List of definitions

### `ink` type root

* [ink-box](https://npmjs.com/package/ink-box)
* [ink-link](https://npmjs.com/package/ink-link)
* [ink-spinner](https://npmjs.com/package/ink-spinner)
* [ink-tab](https://npmjs.com/package/ink-tab)

### `node` type root

* [bn.js](https://npmjs.com/package/bn.js)
* [ethereumjs-tx](https://npmjs.com/package/ethereumjs-tx)
* [ethjs](https://npmjs.com/package/ethjs)
* [ethjs-abi](https://npmjs.com/package/ethjs-abi)
* [idna-uts46-hx](https://npmjs.com/package/idna-uts46-hx)
* [keccak](https://npmjs.com/package/keccak)
* [qrcode-terminal](https://npmjs.com/package/qrcode-terminal)
* [secp256k1](https://npmjs.com/package/secp256k1)
* [triple-beam](https://npmjs.com/package/triple-beam)

### `react` type root

* [qrcode.react](https://npmjs.com/package/qrcode.react)
* [react-highlight](https://npmjs.com/package/react-highlight)
* [react-jazzicon](https://npmjs.com/package/react-jazzicon)

### `react-native` type root

* [react-native-qrcode-scanner](https://npmjs.com/package/react-native-qrcode-scanner)
* [react-native-qrcode-svg](https://npmjs.com/package/react-native-qrcode-svg)

## License

The MIT License

[npm-image]: https://badge.fury.io/js/%40netgum%2Ftypes.svg
[npm-url]: https://npmjs.org/package/@netgum/types

