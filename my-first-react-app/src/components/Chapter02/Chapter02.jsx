// AJAX 요청을 보내서 응답을 받아올 것
// 요번 타임 주제 => 회원들의 정보를 받아왔다고 가정
import { StyledP } from "../Chapter01/Chapter01.styles";

const StyledDiv = styled.div`
    width : 100%;
    height : 200px;
    border : 1px solid lightblue;
    margin : 40px;
    background-color : ${(props) => (props.color ? props.color : "white")};
`;

const members = [
    {
        memberId : "admin",
        memberName : "짱구",
        email : "jjang9@kh.com",
        color : "lightyellow",
    },
    {
        memberId : "user01",
        memberName : "철수",
        email : "ironwater@kh.com"
    },
    {
        memberId : "user02",
        memberName : "유리",
        email : "glass@kh.com"
    },
];

const MemberInfo = (props) => {
    // console.log(props);
    // 구조분해
    const { memberId, memberName, email, color } = props.member;
    console.log(memberId, memberName, email, color);
    return (
        <StyledDiv color={props.member.color}>
                <h5>아이디 : {props.member.memberId}</h5>
                <strong>이름 : {props.member.memberName}</strong>
                <p>이메일 : {props.member.email}</p>
        </StyledDiv>
    );
};

const Chapter02 = () => {
    return (
        <>
          <MemberInfo member={members[0]} />
          {/* <MemberInfo member={members[1]} />
          <MemberInfo member={members[2]} /> */}

            {/* <StyledDiv>
                <h5>아이디 : {members[0].memberId}</h5>
                <strong>이름 : {members[0].memberName}</strong>
                <p>이메일 : {members[0].email}</p>
            </StyledDiv>
            <StyledDiv>
                <h3>아이디 : {members[1].memberId}</h3>
                <strong>이름 : {members[1].memberName}</strong>
                <p>이메일 : {members[1].email}</p>
            </StyledDiv>
            <StyledDiv>
                <h3>아이디 : {members[2].memberId}</h3>
                <strong>이름 : {members[2].memberName}</strong>
                <p>이메일 : {members[2].email}</p>
            </StyledDiv> */}
        </>
    );
};

export default Chapter02;