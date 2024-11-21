import { useState } from "react";

import "./App.css";
import { useEffect } from "react";

function App() {
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => setTime(time - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [time]);

  return (
    <>
      <strong style={{ color: "white" }}>Offer will close in {time}</strong>
    </>
  );
}

export default App;
