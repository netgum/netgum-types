declare module 'keccak' {
  import { Hash } from 'crypto';

  const keccak: (type: 'keccak256' | 'keccak512') => Hash;

  export default keccak;
}
