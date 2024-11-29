import "./App.css";
import { Routes , Route , Link , useNavigate} from "react-router-dom";
import { useReducer , useRef } from "react";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";
import Button from "./components/Button";
import Header from "./components/Header";

const mockData = [
  {
    id: 1,
    createDate : new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 content"
  },
  {
    id: 1,
    createDate : new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 content"
  },
]

function reducer(state, action){
  return state;
}

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 새로운 일기 추가
  const onCreate = (createDate , emotionId , content) =>{
    dispatch({
      type: "CREATE",
      data : {
        id : idRef.current++,
        createDate,
        emotionId,
        content,
      }
    })
  }

  // 기존 일기 수정

  // 기존 일기 삭제


  return (
    <>
      <Header 
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      />

      <Button 
        text={"1233"} 
        type={"POSITIVE"}
        onClick={() => {
        console.log("1233번 클릭");
      }}/>

      <Button 
        text={"1234"} 
        type={"NEGATIVE"}
        onClick={() => {
        console.log("1234번 클릭");
      }}/>
      
      <Button 
        text={"1235"} 
        type={"DEFAULT"}
        onClick={() => {
        console.log("1235번 클릭");
      }}/>

      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/new" element={<New />} />
       <Route path="/diary/:id" element={<Diary />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App;