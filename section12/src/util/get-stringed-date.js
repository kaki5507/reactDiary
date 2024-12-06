export const getStringedDate = (targetDate)=>{
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