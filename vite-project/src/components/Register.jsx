import { useState , useRef } from "react"


// let count를 여기다 선언한다해도 렌더링 두번 가져오면 중복 카운트 되기 떄문
const Register = () => {
  const [input , setInput] = useState({
    name : "",
    birth : "",
    country : "",
    bio : "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => { // 리렌더링 됨으로써 let으로 전역변수해도 바뀌지 않음
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name] : e.target.value,
    });
  };

  const onSubmit = () => {
    if(input.name === ""){
      inputRef.current.focus();
    }
  };

  return (
    <div>

      <div>
        <input type="name" 
              name="name"
              ref={inputRef}
              value={input.name}
              onChange={onChange} 
              placeholder={"이름"}/>
      </div>

      <div>
        <input type="date" 
              name="birth"
              ref={inputRef}
              value={input.birth}
              onChange={onChange} 
              placeholder={"생일"}/>
      </div>

      <button onClick={onSubmit}>서브밋</button>
    </div>
  );
};

export default Register;