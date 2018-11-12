declare module "keccak" {
  import { Hash } from "crypto";

  function keccak(type: "keccak256" | "keccak512"): Hash;

  export = keccak;
}
