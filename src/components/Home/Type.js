import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Game Programmer",
          "Game Developer",
          "Game Designer"
        ],
        autoStart: true,
        loop: true,
        pauseFor: 15000
      }}
    />
  );
}

export default Type;
