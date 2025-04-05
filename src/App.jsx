import { useState } from "react";
import "./App.css";
import WindowTracker from "./challenge-components/windows-tracker";
import Header from "./components/header/header.component";
import Main from "./components/main/main.component";

function App() {
  const [show, setShow] = useState(true);

  const handleToglle = () => {
    setShow((prevShow) => !prevShow);
  };
  return (
    <>
      <Header />
      <Main />

      <button onClick={handleToglle}>
        {!show ? "Show" : "Hide"} WindowTracker
      </button>
      {show && <WindowTracker />}
    </>
  );
}

export default App;
