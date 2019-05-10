declare module 'react-jazzicon' {
  import { Component } from 'react';

  declare class JazzIcon extends Component<JazzIcon.IProps> {
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
