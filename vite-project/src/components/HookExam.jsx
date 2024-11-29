import { useState } from "react";
import useInput from "./../hooks/useInput";
// 1. 함수 컴포넌트 , 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출 X
// 3. 나만의 훅(Custom Hook) 직접 만듦

const HookExam = () => {
  const [input, onChange] = useInput();

  return  (
    <div>
      <input value={input} onChange={onChange} />
    </div>
  );
};

export default HookExam;