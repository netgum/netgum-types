declare module 'ethjs' {
  import BN from 'bn.js';

  declare class Eth {
    static HttpProvider: {
      new(endpoint: string): Eth.IProvider;
    };

    constructor(provider?: Eth.IProvider);

    net_version(): Promise<string>;

    accounts(): Promise<string[]>;

    personal_sign(message: string, address: string): Promise<string>;

    getBalance(address: string, block: Eth.TBlockParam): Promise<BN>;

    getTransactionCount(address: string, block: Eth.TBlockParam): Promise<BN>;

    blockNumber(): Promise<BN>;

    gasPrice(): Promise<BN>;

    getBlockByNumber(block: Eth.TBlockParam, responseTransactions: boolean): Promise<Eth.IBlockByNumberResponse>;

    getTransactionByHash(hash: string): Promise<Eth.ITransaction>;

    getTransactionReceipt(hash: string): Promise<Eth.ITransactionReceipt>;

    call(options: Eth.ICallOptions, block: Eth.TBlockParam): Promise<string>;

    sendRawTransaction(data: string): Promise<string>;

    sendTransaction(options: Eth.ISendTransactionOptions): Promise<string>;

    estimateGas(options: Partial<Eth.ISendTransactionOptions>): Promise<BN>;
  }

  declare namespace Eth {
    export interface IProvider {
      send?: (payload: any) => any;
      sendAsync: (payload: any, callback: (err: any, data: any) => void,
      ) => void;
      isConnected?: () => boolean;
    }

    export type TBlockParam = BN | 'earliest' | 'pending' | 'latest';

    export interface ICallOptions {
      to: string;
      data: string;

      [key: string]: any;
    }

    export interface ISendTransactionOptions {
      to: string;
      value?: string;
      gas?: string;
      data?: string;

      [key: string]: any;
    }

    export interface IBlockByNumberResponse {
      number: BN;
      hash: string;
      transactions?: IBlockTransaction[];

      [key: string]: any;
    }

    export interface IBlockTransaction {
      blockHash: string;
      blockNumber: BN;
      from: string;
      gas: BN;
      gasPrice: BN;
      hash: string;
      input: string;
      nonce: BN;
      to: string;
      transactionIndex: BN;
      value: BN;
      v: string;
      r: string;
      s: string;
    }

    export interface ITransaction {
      blockHash: string;
      blockNumber: BN;
      from: string;
      gas: BN;
      gasPrice: BN;
      hash: string;
      input: string;
      nonce: BN;
      to: string;
      transactionIndex: BN;
      value: BN;
      v: string;
      r: string;
      s: string;
    }

    export interface ITransactionReceipt {
      blockHash: string;
      blockNumber: BN;
      transactionHash: string;
      transactionIndex: BN;
      to: string;
      from: string;
      cumulativeGasUsed: BN;
      gasUsed: BN;
      contractAddress: string;
      logs: {
        address: string;
        topics: BN[];
        data: string;
        blockNumber: BN;
        blockHash: string;
        transactionHash: string;
        transactionIndex: BN;
        logIndex: BN;
      }[];
      logsBloom: string;
      status: string;
    }
  }

  export = Eth;
}
