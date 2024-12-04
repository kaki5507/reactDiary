import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const emotionList = [
    {
        emotionId: 1,
        emotionName: "Good"
    },
    {
        emotionId: 2,
        emotionName: "Oops"
    },
    {
        emotionId: 3,
        emotionName: "Feeling Fine"
    },
    {
        emotionId: 4,
        emotionName: "Sad"
    },
    {
        emotionId: 5,
        emotionName: "Angry"
    },
]

// 날짜 반환 함수
const getStringedDate = (targetDate)=>{
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();

    if(month < 10){
        month = `0${month}`; // 9 -> 09 월 이런 형태로
    }
    if(date < 10){
        date = `0${date}`; // 9 -> 09 월 이런 형태로
    }

    return `${year}-${month}-${date}`;
};

const Editor = ({ onSubmit }) => {
    const nav = useNavigate();
    const [input, setInput] = useState({
        createDate : new Date(),
        emotionId : 3,
        content : "",
    });

    const onChangeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name === 'createDate'){
            value = new Date(value);
        }

        setInput({
            ...input,
            [name] : value,
        });
    };

    const onClickSubmit = () => {
        onSubmit(input);
    }


    return (
        <div className="Editor">
            <section className="date_section">
                <h4>오늘의 날짜</h4>
                <input 
                    name="createDate"
                    onChange={onChangeInput}
                    value={getStringedDate(input.createDate)} 
                    type="date" 
                />
            </section>
            <section className="emotion_section">
                <h4>오늘의 감정</h4>
                <div className="emotion_list_wrapper">
                    {emotionList.map((item)=>(
                        <EmotionItem
                            onClick={()=>onChangeInput({
                                target : {
                                    name : "emotionId",
                                    value : item.emotionId,
                                },
                            })}
                            key={item.emotionId}
                            {...item}
                            isSelected={item.emotionId === input.emotionId}
                        />
                    ))}
                </div>
            </section>
            <section className="content_section">
                <h4>오늘의 일기</h4>
                <textarea 
                    name="content"
                    value={input.content}
                    onChange={onChangeInput}
                    placeholder="일기 내용" 
                />
            </section>
            <section className="button_section">
                <Button text={"취소하기"} onClick={()=>nav(-1)}/>
                <Button text={"작성완료"} type={"POSTIVE"} onClick={onClickSubmit} />
            </section>
        </div>
    );
};

export default Editor;