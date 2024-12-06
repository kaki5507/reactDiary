import { useContext , useState , useEffect  } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = ( id ) => {
    const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState();
    const nav = useNavigate();

    useEffect(() => {
        const currentDiaryItem = data.find(
            (item) => String(item.id) === String(id)
        );

        if(!currentDiaryItem){ // 없는 페이지에 들어가면 ? 
            window.alert("존재하지 않는 페이지.");
            nav('/', {replace:true});
        }

        setCurDiaryItem(currentDiaryItem);
    } , [id, data])

    return curDiaryItem;
};

export default useDiary;