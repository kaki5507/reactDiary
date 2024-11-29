import './App.css';
import { useState , useEffect , useRef} from "react"; // useState 함수 가져옴
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  useEffect(() => {
    console.log("mount"); // 마운트 : 탄생
  } , [])

  // 업데이트 : 변화 , 리렌더링
  useEffect(() => {

    if(!isMount.current){
      isMount.current = true;
      return;
    }

    console.log("update");
  });

  // 언마운트 : 죽음


  const onClickButton = (value) => {
    setCount(count + value);
  };

  return(
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e) => {
          setInput(e.target.value);
        }} />
      </section>
      <Viewer count={count}/> 
      
      {count % 2 == 0 ? <Even/> : null}

      <Controller onClickButton={onClickButton}/>
    </div>
  );
}

export default App;