declare module 'react-native-qrcode-svg' {
  import { ComponentClass } from 'react';
  import { ImageSourcePropType } from 'react-native';

  export interface IQrCodeSvgProps {
    value?: string;
    size?: number;
    color?: string;
    backgroundColor?: string;
    logo?: ImageSourcePropType;
    logoSize?: number;
    logoBackgroundColor?: string;
    logoMargin?: number;
    logoBorderRadius?: number;
    getRef?: () => any;
    ecl?: 'L' | 'M' | 'Q' | 'H';
  }

  const QrCodeSvg: ComponentClass<IQrCodeSvgProps>;

  export default QrCodeSvg;
}
