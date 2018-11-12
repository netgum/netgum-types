declare module "secp256k1" {
  import { Buffer } from "buffer";

  export function privateKeyVerify(privateKey: Buffer): boolean;

  export function publicKeyCreate(privateKey: Buffer, compressed?: boolean): Buffer;

  export function publicKeyVerify(publicKey: Buffer): boolean;

  export function publicKeyConvert(publicKey: Buffer, compressed?: boolean): Buffer;

  export function sign(message: Buffer, privateKey: Buffer): {
    signature: Buffer;
    recovery: number;
  };

  export function verify(message: Buffer, signature: Buffer, publicKey: Buffer): boolean;

  export function recover(message: Buffer, signature: Buffer, recovery: number, compressed?: boolean): Buffer;
}
