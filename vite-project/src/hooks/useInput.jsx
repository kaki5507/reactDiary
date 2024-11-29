import { useState } from "react";

function useInput(){ // use로 접두사 붙이면 훅이라 생각해서 오류 X
    const [input, setInput] = useState("");
  
    const onChange = (e) => {
        setInput(e.target.value);
    };
  
    return [input, onChange];
  }

export default useInput;