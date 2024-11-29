import { useSearchParams } from "react-router-dom";  

const Diary = () => {
    const [params, setParams] = useSearchParams();
    console.log(params.get('num'));

    return <div>다람쥐</div>;
};

export default Diary;