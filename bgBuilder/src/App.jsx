import { useState } from "react";

function App() {
  let [bg, setBg] = useState("black");

  const bgColor = (color) => {
    setBg(color);
  };

  return (
    <div style={{ height: "100vh", backgroundColor: bg, width: "100vw", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <div>
        <button style={{border: "none", padding: "10px 18px", borderRadius: "25px", backgroundColor: "red", margin  :"10px"}} onClick={()=>bgColor("red")}>Red</button>
        <button style={{border: "none", padding: "10px 18px", borderRadius: "25px", backgroundColor: "green", margin  :"10px"}} onClick={()=>bgColor("green")}>Green</button>
        <button style={{border: "none", padding: "10px 18px", borderRadius: "25px", backgroundColor: "yellow", margin  :"10px", color: "black"}} onClick={()=>bgColor("yellow")}>Yellow</button>
      </div>
    </div>
  );
};

export default App;
