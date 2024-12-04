import { useState, useContext } from 'react';
import { DiaryStateContext } from '../App';

import Header from '../components/Header';
import Button from '../components/Button';
import DiaryList from '../components/DiaryList';

const getMonthlyData = (pivatDate, data) => {
  const beginTime = new Date(pivatDate.getFullYear(), pivatDate.getMonth(), 1, 0, 0, 0).getTime();
  const endTime = new Date(pivatDate.getFullYear(), pivatDate.getMonth() + 1, 0, 23, 59, 59).getTime();

  // 시작과 끝 사이 데이터 필터링
  return data.filter((item) => beginTime <= item.createDate && endTime >= item.createDate);
}

const Home = () => {
  const data = useContext(DiaryStateContext); // app.jsx에 있는 context 가져와서
  const [pivatDate, setPivatDate] = useState(new Date());

  const monthlyData = getMonthlyData(pivatDate, data);

  const onIncreaseMonth = () => {
    setPivatDate(
      new Date(pivatDate.getFullYear(), pivatDate.getMonth() + 1)
    );
  };
  const onDecreaseMonth = () => {
    setPivatDate(
      new Date(pivatDate.getFullYear(), pivatDate.getMonth() - 1)
    );
  };

  return (
    <div>
      <Header
        title={`${pivatDate.getFullYear()}년 ${pivatDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
        rightChild={<Button onClick={onIncreaseMonth} text={">"} />} />
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;