import React, {createContext, useState} from 'react';
import {IGradientContext, IImageColors} from '../interfaces/GradientInterface';

export const GradientContext = createContext({} as IGradientContext);

export const GradientProvider = ({children}: any) => {
  const [colors, setColors] = useState<IImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });
  const [prevColors, setPrevColors] = useState<IImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setMainColors = (colorsMain: IImageColors) => {
    setColors(colorsMain);
  };
  const setPrevMainColors = (colorsPrev: IImageColors) => {
    setPrevColors(colorsPrev);
  };

  return (
    <GradientContext.Provider
      value={{colors, prevColors, setMainColors, setPrevMainColors}}>
      {children}
    </GradientContext.Provider>
  );
};
