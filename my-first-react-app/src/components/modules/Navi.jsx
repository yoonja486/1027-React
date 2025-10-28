import { useNavigate } from "react-router-dom";
import { StyledredP } from "../Chapter01/Chapter01.styles";

const Nav = () => {
    const navi = useNavigate();

    return (
        <StyledredP>
        <a onClick={() => navi("/fusion")}>fusion</a>
        <a onClick={() => navi("/01")}>01</a>
        <a href="/fusion">퓨전.</a>
        <a href="/01">챕터01.</a>
        <a href="/02">챕터02.</a>
        </StyledredP>

    )
}