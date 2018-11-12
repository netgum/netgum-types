declare module "idna-uts46-hx" {
  export function toAscii(value: string, options?: {
    useStd3ASCII?: boolean;
    transitional?: boolean;
  }): string;
}
