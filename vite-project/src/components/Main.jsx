import "./Main.css";
// JSX 문법은 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있음
// 숫자 , 문자열 , 배열 값만 렌더링 됨
// 모든 태그는 닫혀 있어야 함
const Main = () => { // 대문자로 써야지 컴포넌트라 인식 (소문자 X)
  let number = 10;  
  const obj = {a:2}; // 객체는 그대로 뿌려줄 수 없음 {obj} -> 불가능

  const user = {
    name : "김김김",
    isLogin : true,
  }
  
  return <>
    {user.isLogin ? <div className="logout">로그아웃</div> : <div>로그인</div>}
  </>;

  // return (
  //     <main> {/* 최상위 태그 하나만 가능 */}
  //       <h1>Main</h1>{/* jsx 주석 */}
  //       <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
  //       {10}
  //       {number}
  //       {[1,2,3]}
  //       <br />
  //       {obj.a}
  //     </main>
  //   );
  
};

export default Main;