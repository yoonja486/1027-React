import styled from "styled-components";

const StyledDiv = styled.div`
    width : 100%;
    height : 200px;
    border : 1px solid lightblue;
    margin : 40px;
    background-color : ${(props) => (props.color ? props.color : "white")};
`;

export const StyledP = styled.p`
    background-color: pink;
    color : white;
    width : 700px;
    height : 200px;
    line-height : 200px;
    border : 1px dotted orange;

    &:hover {
        pointer : curosr;
        background-color : lightblue;
    }
`;

export const StyledredP = styled.p`
    background-color : red;
    color : white;
     
`