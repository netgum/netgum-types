declare module 'qrcode.react' {
  import { ComponentClass } from 'react';

  export interface IQrCodeProps {
    value: string;
    renderAs?: 'canvas' | 'svg';
    size?: number;
    bgColor?: string;
    fgColor?: string;
    level?: 'L' | 'M' | 'Q' | 'H';
  }

  const QrCode: ComponentClass<IQrCodeProps>;

  export default QrCode;
}
