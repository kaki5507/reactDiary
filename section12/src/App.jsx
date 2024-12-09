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

const mockData = []

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

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(1);


  //localStorage.setItem('test', 'hello');
  //localStorage.setItem("person", JSON.stringify({ name : 'KIM '})); // JSON타입을 문자열로

  //console.log(localStorage.getItem("test"));
  //console.log(JSON.parse(localStorage.getItem("person"))); // 다시 객체로 변환

  //localStorage.removeItem('test');

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