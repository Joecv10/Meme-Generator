import { useEffect, useState } from "react";

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const watchWindowSize = () => {
      console.log("Window resized");
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", watchWindowSize);
    return () => {
      window.removeEventListener("resize", watchWindowSize);
      console.log("Cleanup");
    };
  }, []);
  return <h1>Window width: {windowWidth} px.</h1>;
}

/**
 * 
 * const [show, setShow] = useState(true);
 
   const handleToglle = () => {
     setShow((prevShow) => !prevShow);
 * 
 *  <button onClick={handleToglle}>
        {!show ? "Show" : "Hide"} WindowTracker
      </button>
      {show && <WindowTracker />}
 */
