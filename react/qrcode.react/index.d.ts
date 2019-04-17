declare module 'qrcode.react' {
  import { ComponentClass } from 'react';

  declare class QrCode extends ComponentClass<QrCode.IProps> {
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
