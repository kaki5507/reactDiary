import { useParams } from "react-router-dom";

const Edit = () => {
    const params = useParams();
    return <div>{params.id}번 읽기 수정페이지입니다.</div>;
}

export default Edit;