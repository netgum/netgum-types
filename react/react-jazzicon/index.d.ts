declare module 'react-jazzicon' {
  import { ComponentClass } from 'react';

  const jazzicon: ComponentClass<jazzicon.IJazziconProps>;

  namespace jazzicon {
    export interface IJazziconProps {
      diameter: number;
      seed: number;
    }
  }

  export default jazzicon;
}
