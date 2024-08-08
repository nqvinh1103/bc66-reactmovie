import { Button, Input } from "antd";
import React, { useEffect, useRef } from "react";

const DemoUseRef = () => {
  const inputRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <div>
      DemoUseRef
      <form ref={formRef} onSubmit={handleSubmit}>
        <Input ref={inputRef} id="" className="" placeholder="Username" />
      </form>
      <Button
        onClick={() => {
          formRef.current.requestSubmit();
        }}
      >
        Submit
      </Button>
      <hr />
      <input type="file" hidden />
      <div className="w-[200px]"></div>
    </div>
  );
};

export default DemoUseRef;
