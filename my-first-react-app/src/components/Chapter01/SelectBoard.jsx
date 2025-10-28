import "./Chapter01.css";
import { StyledP, StyledredP } from "./Chapter01.styles";

const SelectBoard = () => {
    // AJAX요청을 보내서 응답이 왔다고 가정
    const obj = {
        boardTitle : "1번글",
        boardContent : "내용입니다",
        boardWriter : "관리자",
    };

    return (
        <>
            <StyledredP>{obj.boardTitle}</StyledredP>
            <StyledP>{obj.boardContent}</StyledP>
            <p className="styled-p">{obj.boardWriter}</p>
        </>
    );
};

export default SelectBoard;