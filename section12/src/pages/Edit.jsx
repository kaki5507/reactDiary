import { useParams , useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext , useEffect , useState } from "react";
import { DiaryDispatchContext,DiaryStateContext } from "../App";
import useDiary from "../hooks/useDiary";

const Edit = () => {
    const params = useParams();
    const nav = useNavigate();
    const { onDelete , onUpdate } = useContext(DiaryDispatchContext);

    const curDiaryItem = useDiary(params.id);

    // 클릭 시 삭제
    const onClickDelete = () => {
        if(window.confirm("일기 삭제 복구 X")){
            onDelete(params.id);
            nav('/',{replace:true});
        }
    };

    const onSubmit = (input) => {
        if(
            window.confirm("정말 수정하시겠습니까?")
        ){
            onUpdate(
                params.id, 
                input.createData.getTime(), 
                input.emotionId, 
                input.content
            );
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
             <Editor initData={curDiaryItem} />
        </div>
    );
}

export default Edit;