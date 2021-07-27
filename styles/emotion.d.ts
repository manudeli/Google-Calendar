import '@emotion/react';

interface IColorNumber {
  '50': string;
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
  a100?: string;
  a200?: string;
  a400?: string;
  a700?: string;
}

interface IColor {
  red: IColorNumber;
  pink: IColorNumber;
  purple: IColorNumber;
  deeppurple: IColorNumber;
  indigo: IColorNumber;
  blue: IColorNumber;
  lightblue: IColorNumber;
  cyan: IColorNumber;
  teal: IColorNumber;
  green: IColorNumber;
  lightgreen: IColorNumber;
  lime: IColorNumber;
  yellow: IColorNumber;
  amber: IColorNumber;
  orange: IColorNumber;
  deeporange: IColorNumber;
  brown: IColorNumber;
  grey: IColorNumber;
  bluegrey: IColorNumber;
}

interface Size {
  large: string;
  medium: string;
  small: string;
}

declare module '@emotion/react' {
  export interface Theme {
    rootSize: Size;
    radiusSize: Size;
    color: IColor;
    mediaQuery: {
      laptop: string;
      tablet: string;
      mobile: string;
    };
  }
}
