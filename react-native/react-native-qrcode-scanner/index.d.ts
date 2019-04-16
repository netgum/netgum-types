declare module 'react-native-qrcode-scanner' {
  import { ReactNode, ComponentClass } from 'react';
  import { ViewStyle, StyleProp } from 'react-native';

  export interface IQrCodeScannerProps {
    onRead?: TQrCodeScannerHandler;
    topContent?: ReactNode;
    bottomContent?: ReactNode;
    showMarker?: boolean;
    reactivate?: boolean;
    reactivateTimeout?: number;
    cameraStyle?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
  }

  export interface IQrCodeScannerEvent {
    data?: string;
  }

  export type TQrCodeScannerHandler = (event: IQrCodeScannerEvent) => any;

  const QrCodeScanner: ComponentClass<IQrCodeScannerProps>;

  export default QrCodeScanner;
}
