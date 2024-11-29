const Button = ({text , color , children}) => { 
  // 이벤트 객체
  const onClcikButton2 = (e) => {
    console.log(e);
    console.log("이벤트 클릭 2");
  };

    return(
      <button 
        onClick={onClcikButton2}
        //onMouseEnter ={onClcikButton2}
        style={{color : color}}>
        {text} - {color.toUpperCase()}
        {children}
      </button>
    );
};

Button.defaultProps = {
  color: "black",
};

export default Button;