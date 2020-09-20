import React, { useState } from "react";
import "./styles.css";
import Lottie from "react-lottie";
import animationData from "./lotti.json";
export default function App() {
  const [state, setState] = useState({
    isStopped: false,
    isPaused: false
  });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        isStopped={state.isStopped}
        isPaused={state.isPaused}
      />
      <button
        onClick={() =>
          setState({
            isStopped: !state.isStopped,
            isPaused: false
          })
        }
      >
        Toggle
      </button>
    </div>
  );
}
