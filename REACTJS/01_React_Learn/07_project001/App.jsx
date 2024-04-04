import { useState } from "react";

function App() {
  const [color, setColor] = useState("lavender");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ background: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{ background: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{ background: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{ background: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("Olive")}
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{ background: "Olive" }}
            >
              Olive
            </button>
            <button
              onClick={() => setColor("gray")}
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{ background: "gray" }}
            >
              Gray
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{ background: "yellow" }}
            >
              Yellow
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
