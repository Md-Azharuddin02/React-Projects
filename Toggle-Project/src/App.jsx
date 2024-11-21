import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    // setToggle(event.target.checked);
    setToggle(!toggle)
  };
  console.log(toggle);
  return (
    <>
      <center style={{ display: "flex", gap: "10px" }}>
        <input
          type="checkbox"
          // checked={toggle}
          // onClick={(event) => setToggle(event.target.checked)}
          onClick={() => handleToggle()}
        />
        {!toggle ? "OFF" : "ON"}
        {/* <p>ON</p>
        <p>OFF</p> */}
      </center>
    </>
  );
}

export default App;
