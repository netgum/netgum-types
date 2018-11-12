declare module "ethereumjs-tx" {
  const EthereumTx: {
    new(params: EthereumTx.IEthereumTxParams): EthereumTx.IEthereumTx;
  };

  namespace EthereumTx {
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

  export = EthereumTx;
}
