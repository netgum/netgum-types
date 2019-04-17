declare module 'keccak' {
  import { Hash } from 'crypto';

  declare function keccak(type: 'keccak256' | 'keccak512'): Hash;

  export = keccak;
}
