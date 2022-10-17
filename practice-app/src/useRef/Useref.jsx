import React, { useRef } from "react";
import { useEffect } from "react";

const Useref = () => {
  const input1 = useRef();
  useEffect(() => {
    input1.current.focus();
  }, []);
  useEffect(() => {
    input1.current.focus();
  }, [input1]);
  return (
    <div>
      <input ref={input1} type="text" />
      <input ref={input1} type="text" />
      <input type="text" />
      <button>Submit</button>
    </div>
  );
};

export default Useref;
