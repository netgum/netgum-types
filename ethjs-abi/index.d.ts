declare module "ethjs-abi" {
  export interface IAbiItem {
    name?: string;
    type: string;
    anonymous?: boolean;
    payable?: boolean;
    constant?: boolean;
    stateMutability?: string;
    inputs?: Array<{
      indexed?: boolean,
      name: string,
      type: string,
    }>;
    outputs?: Array<{
      name: string,
      type: string,
    }>;
  }
  export interface IResult {
    [ key: string ]: any;
  }

  export interface ILog extends IResult {
    _eventName: string;
  }

  export type TAbi = IAbiItem[];
  export type TLogDecoder = (logs: any[]) => ILog[];

  export const encodeEvent: (abiItem: IAbiItem, args: any[]) => string;
  export const encodeMethod: (abiItem: IAbiItem, args: any[]) => string;

  export const decodeMethod: (abiItem: IAbiItem, data: string) => IResult;
  export const decodeEvent: (abiItem: IAbiItem, data: string) => IResult;

  export const encodeSignature: (abiItem: IAbiItem) => string;

  export const logDecoder: (abi: TAbi) => TLogDecoder;
}
