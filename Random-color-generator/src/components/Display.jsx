import "../App";

const Display = () => {
  return (
    <div className="container">
      <div className="btn-container">
        <button>Change with Hash</button>
        <button>Change with RGB</button>
        <button>Change color</button>
      </div>
      <div className="color-name-container">
        <h1>HEX Color</h1>
        <h1>#1BD1CF</h1>
      </div>
    </div>
  );
};
export default Display;
