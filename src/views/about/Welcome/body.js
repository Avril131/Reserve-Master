import React from "react";
import Typed from "typed.js";
const { useEffect, useRef, useState } = React;

const Body = () => {
  const typeTarget = useRef(null);
  const [appear, setAppear] = useState(false);
  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: [
        " We'are a team full of imagination.<br />Ranking is not in any order————<br /><br />Avril-- Reserve-Master-frontend<br />Carry-- Reserve-Master-frontend<br />Dwq7-- Reserve-Master-node_Service",
      ],
      typeSpeed: 30,
      cursorChar: "_",
      autoInsertCss: true,
      showCursor: true,
      onComplete: () => {
        typed.destroy();
        setAppear(true);
      },
    });
  }, []);

  return (
    <div>
      {!appear ? (
        <span className="wordGo" ref={typeTarget} />
      ) : (
        <p>
          We'are a team full of imagination.
          <br />
          Ranking is not in any order————
          <br />
          <br /> Avril-- Reserve-Master-frontend <br />
          Carry-- Reserve-Master-frontend
          <br />
          Dwq7-- Reserve-Master-node_Service
        </p>
      )}
    </div>
  );
};
export default Body;
