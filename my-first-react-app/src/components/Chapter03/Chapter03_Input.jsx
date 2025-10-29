import { useState } from "react";

// 사용자가 인풋요소에 값을 입력할 때 마다 적절한 메시지를 화면상에 출력

const Chapter03_Input = () => {
    const [text, setText] = useState("");
    const [message, setMessage] = useState("값을 입력해주세요.");

    const inputHandler = (e) => {
        // console.log(e);
        setText(e.target.value); 
    };

    return (
        <>
            <h2>값을 입력 받아보아요</h2>
            <br />
            <br />
            <input type="text" onChange={inputHandler} />
            <br />
            <br />
            <span>사용자가 입력한 값 : {text}</span>
            <br />
            <span>안내 메시지 : {message}</span>
            <br />
            <br />
        </>
    )
}

export default Chapter03_Input;