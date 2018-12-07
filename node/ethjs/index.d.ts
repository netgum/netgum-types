declare module 'ethjs' {
  import { IBN } from 'bn.js';

  const eth: {
    HttpProvider: {
      new(endpoint: string): eth.IProvider;
    };

    new(provider?: eth.IProvider): eth.IEth;
  };

  namespace eth {

    export interface IEth {
      net_version(): Promise<string>;

      accounts(): Promise<string[]>;

      personal_sign(message: string, address: string): Promise<string>;

      getBalance(address: string, block: TBlockParam): Promise<IBN>;

      getTransactionCount(address: string, block: TBlockParam): Promise<IBN>;

      blockNumber(): Promise<IBN>;

      gasPrice(): Promise<IBN>;

      getBlockByNumber(block: TBlockParam, responseTransactions: boolean): Promise<IBlockByNumberResponse>;

      getTransactionReceipt(hash: string): Promise<ITransactionReceipt>;

      call(options: ICallOptions, block: TBlockParam): Promise<string>;

      sendRawTransaction(data: string): Promise<string>;

      sendTransaction(options: ISendTransactionOptions): Promise<string>;

      estimateGas(options: Partial<ISendTransactionOptions>): Promise<IBN>;
    }

    export interface IProvider {
      send?: (payload: any) => any;
      sendAsync: (payload: any, callback: (err: any, data: any) => void,
      ) => void;
      isConnected?: () => boolean;
    }

    export type TBlockParam = IBN | 'earliest' | 'pending' | 'latest';

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
      number: IBN;
      hash: string;
      transactions?: eth.IBlockTransaction[];

      [key: string]: any;
    }

    export interface IBlockTransaction {
      blockHash: string;
      blockNumber: IBN;
      from: string;
      gas: IBN;
      gasPrice: IBN;
      hash: string;
      input: string;
      nonce: IBN;
      to: string;
      transactionIndex: IBN;
      value: IBN;
      v: string;
      r: string;
      s: string;
    }

    export interface ITransactionReceipt {
      blockHash: string;
      blockNumber: IBN;
      transactionHash: string;
      transactionIndex: IBN;
      to: string;
      from: string;
      cumulativeGasUsed: IBN;
      gasUsed: IBN;
      contractAddress: string;
      logs: {
        address: string;
        topics: IBN[];
        data: string;
        blockNumber: IBN;
        blockHash: string;
        transactionHash: string;
        transactionIndex: IBN;
        logIndex: IBN;
      }[];
      logsBloom: string;
      status: string;
    }
  }

  export = eth;
}
