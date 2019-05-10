declare module 'qrcode.react' {
  import { Component } from 'react';

  declare class QrCode extends Component<QrCode.IProps> {
    //
  }

  declare namespace QrCode {
    export interface IProps {
      value: string;
      renderAs?: 'canvas' | 'svg';
      size?: number;
      bgColor?: string;
      fgColor?: string;
      level?: 'L' | 'M' | 'Q' | 'H';
    }
  }

  export = QrCode;
}
