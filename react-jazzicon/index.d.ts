declare module "react-jazzicon" {
  import { ComponentClass } from "react";

  const Jazzicon: ComponentClass<Jazzicon.IJazziconProps>;

  namespace Jazzicon {
    export interface IJazziconProps {
      diameter: number;
      seed: number;
    }
  }

  export default Jazzicon;
}
