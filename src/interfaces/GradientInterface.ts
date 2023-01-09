export interface IGradientBackgroundInterface {
  children: JSX.Element | JSX.Element[];
}

export interface IGradientContext {
  colors: IImageColors;
  prevColors: IImageColors;
  setMainColors: (colors: IImageColors) => void;
  setPrevMainColors: (colors: IImageColors) => void;
}

export interface IImageColors {
  primary: string;
  secondary: string;
}
