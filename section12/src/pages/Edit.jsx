import { useParams , useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext , useEffect , useState } from "react";
import { DiaryDispatchContext,DiaryStateContext } from "../App";

const Edit = () => {
    const params = useParams();
    const nav = useNavigate();
    const { onDelete } = useContext(DiaryDispatchContext);
    const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState();

    useEffect(() => {
        const currentDiaryItem = data.find((item)=>String(item.id) === String(params.id));

        if(!currentDiaryItem){ // 없는 페이지에 들어가면 ? 
            window.alert("존재하지 않는 페이지.");
            nav('/', {replace:true});
        }

        setCurDiaryItem(currentDiaryItem);
    },[params.id, data])

    // 클릭 시 삭제
    const onClickDelete = () => {
        if(window.confirm("일기 삭제 복구 X")){
            onDelete(params.id);
            nav('/',{replace:true});
        }
    };

    return (
        <div>
            <Header
             title={"일기 수정하기"}
             leftChild={
                <Button text={"< 뒤로 가기"} onClick={()=>nav(-1)}/>
             }
             rightChild={
                <Button text={"삭제하기"} onClick={onClickDelete} type={"NEGATIVE"} />
             }
             />
             <Editor />
        </div>
    );
}

export default Edit;