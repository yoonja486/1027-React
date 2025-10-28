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

const TestComponent = (props) => {
    // Pure하지 않게 props값을 변경하려고 하면~~
    // props.num = props.num + 1; 읽기전용이라는 뜻
    return (
        <>
         프롭스값 + 2 : <div>꽥</div>
        </>
    );
};

const Chapter02 = () => {
    return (

        <>
        {
          members ?  
          members.map((e) => (<MemberInfo member={e} key={e.memberId} />
        ))
        :
            <h1>조회결과가 없습니다.</h1>
        }
        
          {/* <MemberInfo member={members[0]} />
          <MemberInfo member={members[1]} />
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

         <pre>
            props사용 시 주의할 점! 
            <br />
            React의 함수형 컴포넌트는 항상 Pure하게 만들어야함!

            React의 사용목적 : 웹 애플리케이션의 UI(UserInterface) = 
            MVC(V) : 필요한 값 입력받기 / 요청보내기 / 요청 결과 출력 / 만들용도로 사용

         </pre>
        </>
    );
};

export default Chapter02;