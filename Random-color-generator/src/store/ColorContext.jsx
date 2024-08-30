import { createContext, useState } from "react";

export const ColorContext = createContext();

export const ColorContextProvider = ({ children }) => {
  const [newColor, setNewColor] = useState("RGB(157,84,226)");
  const [currentState, setCorrentState] = useState("RGB");

  const colorGenerator = () => {
    currentState === "HEX" ? hexColorGenerator() : rgbColorGenerator();
    document.body.style.background = newColor;
  }; // color generator

  const hexColorGenerator = () => {
    // hex color genetor
    const str = "ABCDEF1234567890";
    let color = "";
    for (let i = 0; i < 6; i++) {
      let number = Math.floor(Math.random() * str.length);
      color += str.charAt(number);
    }
    setNewColor(`#${color}`);
    document.body.style.background=newColor
  };

  const rgbColorGenerator = () => {
    // rgb color generator
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    setNewColor(`RGB(${R},${G},${B})`);
    document.body.style.background=newColor
  };

  return (
    <ColorContext.Provider
      value={{
        colorGenerator,
        newColor,
        setCorrentState,
        currentState,
        rgbColorGenerator,
        hexColorGenerator
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};
