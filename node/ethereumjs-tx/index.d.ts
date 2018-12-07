declare module 'ethereumjs-tx' {
  const ethereumTx: {
    new(params: ethereumTx.IEthereumTxParams): ethereumTx.IEthereumTx;
  };

  namespace ethereumTx {
    export interface IEthereumTx {
      sign(privateKey: Buffer);

      serialize(): Buffer;

      verifySignature(): boolean;

      getSenderAddress(): string;
    }

    export interface IEthereumTxParams {
      nonce: string;
      gasPrice: string;
      gasLimit?: string;
      to: string;
      value?: string;
      data: string;
      chainId?: number;
    }
  }

  export = ethereumTx;
}
