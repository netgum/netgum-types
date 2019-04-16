declare module 'ethereumjs-tx' {
  export interface IEthTx {
    sign(privateKey: Buffer);

    serialize(): Buffer;

    verifySignature(): boolean;

    getSenderAddress(): string;
  }

  export interface IEthTxParams {
    nonce: string;
    gasPrice: string;
    gasLimit?: string;
    to: string;
    value?: string;
    data: string;
    chainId?: number;
  }

  const EthTx: {
    new(params: IEthTxParams): IEthTx;
  };

  export default EthTx;
}
