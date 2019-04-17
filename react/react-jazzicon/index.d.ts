declare module 'react-jazzicon' {
  import { ComponentClass } from 'react';

  declare class JazzIcon extends ComponentClass<JazzIcon.IProps> {
    //
  }

  declare namespace JazzIcon {
    export interface IProps {
      diameter: number;
      seed: number;
    }
  }

  export = JazzIcon;
}
