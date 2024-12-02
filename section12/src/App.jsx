import "./App.css";
import { Routes , Route , Link , useNavigate } from "react-router-dom";
import { useReducer , useRef , createContext } from "react";
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
    id: 2,
    createDate : new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 content"
  },
]

function reducer(state, action){
  
  switch(action.type){
    case 'CREATE': 
      return [action.data,...state];
    case 'UPDATE': 
      return state.map((item) => String(item.id) === String(action.data.id) ? action.data : item);
    case 'DELETE':
      return state.filter((item)=> String(item.id) !== String(action.id)); 
    default:
      return state;
  }
}

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

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
  const onUpdate = (id , createDate , emotionId , content) => {
    dispatch({
      type: "UPDATE",
      data : {
        id,
        createDate,
        emotionId,
        content,
      }
    });
  }

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type : "DELETE",
      id,
    });
  }

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

      <button onClick={() => {
        onCreate(new Date().getTime(), 1, "Hello");
      }}>일기 추가 테스트</button>
      <button onClick={() => {
        onUpdate(2,new Date().getTime(), 1, "Hello55555");
      }}>일기 수정 테스트</button>
      <button onClick={() => {
        onDelete(2);
      }}>일기 삭제 테스트</button>

      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{
          onCreate,
          onUpdate,
          onDelete,
        }}>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<NotFound />}/>
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App;