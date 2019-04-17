declare module 'react-native-qrcode-scanner' {
  import { ReactNode, ComponentClass } from 'react';
  import { ViewStyle, StyleProp } from 'react-native';

  declare class QrCodeScanner extends ComponentClass<QrCodeScanner.IProps> {
    //
  }

  declare namespace QrCodeScanner {
    export interface IProps {
      onRead?: TScannerHandler;
      topContent?: ReactNode;
      bottomContent?: ReactNode;
      showMarker?: boolean;
      reactivate?: boolean;
      reactivateTimeout?: number;
      cameraStyle?: StyleProp<ViewStyle>;
      containerStyle?: StyleProp<ViewStyle>;
    }

    export interface IScannerEvent {
      data?: string;
    }

    export type TScannerHandler = (event: IScannerEvent) => any;
  }

  export = QrCodeScanner;
}
