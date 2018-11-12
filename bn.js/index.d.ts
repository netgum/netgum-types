declare module "bn.js" {
  import { Buffer } from "buffer";

  const BN: {
    new(num: number | string | number[] | Buffer, base?: number, endian?: "le" | "be"): BN.IBN;
    isBN(num: any): boolean;
  };

  namespace BN {
    export interface IBN {
      clone(): IBN;
      toString(base?: number, length?: number): string;
      toNumber(): number;
      toJSON(): string;
      toArray(endian?: "le" | "be", length?: number): number[];
      toBuffer(endian?: "le" | "be", length?: number): Buffer;
      bitLength(): number;
      zeroBits(): number;
      byteLength(): number;
      isNeg(): boolean;
      isEven(): boolean;
      isOdd(): boolean;
      isZero(): boolean;
      cmp(b: any): number;
      lt(b: any): boolean;
      lte(b: any): boolean;
      gt(b: any): boolean;
      gte(b: any): boolean;
      eq(b: any): boolean;
      isBN(b: any): boolean;
      neg(): IBN;
      abs(): IBN;
      add(b: IBN): IBN;
      sub(b: IBN): IBN;
      mul(b: IBN): IBN;
      sqr(): IBN;
      pow(b: IBN): IBN;
      div(b: IBN): IBN;
      mod(b: IBN): IBN;
      divRound(b: IBN): IBN;
      or(b: IBN): IBN;
      and(b: IBN): IBN;
      xor(b: IBN): IBN;
      setn(b: number): IBN;
      shln(b: number): IBN;
      shrn(b: number): IBN;
      testn(b: number): boolean;
      maskn(b: number): IBN;
      bincn(b: number): IBN;
      notn(w: number): IBN;
      gcd(b: IBN): IBN;
      egcd(b: IBN): { a: IBN, b: IBN, gcd: IBN };
      invm(b: IBN): IBN;
    }
  }

  export = BN;
}
