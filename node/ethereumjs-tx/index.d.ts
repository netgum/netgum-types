declare module 'ethereumjs-tx' {
  import { Buffer } from 'buffer';

  declare class EthTx {
    constructor(options: EthTx.IOptions);

    sign(privateKey: Buffer);

    serialize(): Buffer;

    verifySignature(): boolean;

    getSenderAddress(): string;
  }

  declare namespace EthTx {
    export interface IOptions {
      nonce: string;
      gasPrice: string;
      gasLimit?: string;
      to: string;
      value?: string;
      data: string;
      chainId?: number;
    }
  }

  export = EthTx;
}
