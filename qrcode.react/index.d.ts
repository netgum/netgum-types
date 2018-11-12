declare module "qrcode.react" {
  import { ComponentClass } from "react";

  const QRCode: ComponentClass<QRCode.IQRCodeProps>;

  namespace QRCode {
    export interface IQRCodeProps {
      value: string;
      renderAs?: "canvas" | "svg";
      size?: number;
      bgColor?: string;
      fgColor?: string;
      level?: "L" | "M" | "Q" | "H";
    }
  }

  export = QRCode;
}
