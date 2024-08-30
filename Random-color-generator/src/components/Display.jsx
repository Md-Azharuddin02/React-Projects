import "../App";
import { ColorContext } from "../store/ColorContext";
import { useContext } from "react";

const Display = () => {
  const {
    newColor,
    setCorrentState,
    currentState,
    rgbColorGenerator,
    hexColorGenerator,
  } = useContext(ColorContext);

  return (
    <div className="container">
      <div className="btn-container">
        <button onClick={() => setCorrentState("RGB")}>Change with RGB</button>
        <button onClick={() => setCorrentState("HEX")}>Change with HEX</button>
        <button
          onClick={
            currentState === "HEX" ? hexColorGenerator : rgbColorGenerator
          }
        >
          Change color
        </button>
      </div>
      <div className="color-name-container">
        <h1>{currentState}</h1>
        <h1>{newColor}</h1>
      </div>
    </div>
  );
};
export default Display;
