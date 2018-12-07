declare module 'qrcode.react' {
  import { ComponentClass } from 'react';

  const qRCode: ComponentClass<qRCode.IQRCodeProps>;

  namespace qRCode {
    export interface IQRCodeProps {
      value: string;
      renderAs?: 'canvas' | 'svg';
      size?: number;
      bgColor?: string;
      fgColor?: string;
      level?: 'L' | 'M' | 'Q' | 'H';
    }
  }

  export = qRCode;
}
