declare module 'react-jazzicon' {
  import { ComponentClass } from 'react';

  export interface IJazzIconProps {
    diameter: number;
    seed: number;
  }

  const JazzIcon: ComponentClass<IJazzIconProps>;

  export default JazzIcon;
}
