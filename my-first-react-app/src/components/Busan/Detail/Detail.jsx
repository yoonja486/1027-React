import { useState, useEffect } from "react";
import { StyledMoreButton, StyledTitle, StyledWrap } from "../Foods.styles";
import { StyledDescription, StyledMainImg, StyledMap, StyledOther } from "./Detail.styles";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Comments from "../Comment/Comments";

const Detail = () => {
    const { id } = useParams();
    const navi = useNavigate();
    // alert(id);
    const [food, setFood] = useState({
        title : "",
        img : "",
        description : "",
        usageTime : "",
        address : "",
        lat : "",
        lng : "",
    });

    const [load, isLoad] = useState(false); // 응답이 돌아왔나 안왔나
    const [content, setContent] = useState(""); // 사용자가 입력한 후기 값 담을 상태
    const [success, isSuccess] = useState(false); // 댓글이 작성 될 때마다 스위칭할 상태

    const contentHandler = (e) => {
        setContent(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        
        if(content.trim() === '') {
            alert("내용을 입력하세요.");
            return;
        }
        // 이런저런 유효성 검사
        axios.post(`http://localhost/spring/api/comments`, {
            foodNo : id,
            content : content,
        })
        .then((result) => {
            console.log(result);
            setContent("");
            isSuccess((success) => !success);
        });

    };

    useEffect(() => {
        axios.get(`http://localhost/spring/api/busan/detail/${id}`).then((result) => {
            // console.log(result);
            const response = result.data.getFoodKr.item[0];
            // console.log(response);
            setFood({
                title : response.MAIN_TITLE,
                img : response.MAIN_IMG_NORMAL,
                description : response.ITEMCNTNTS,
                usageTime : response.USAGE_DAY_WEEK_AND_TIME,
                address : response.ADDR1,
                lat : response.LAT,
                lng : response.LNG,
            });
            isLoad(true);

            if(food.lat) {
                var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
                var options = { //지도를 생성할 때 필요한 기본 옵션
                center: new kakao.maps.LatLng(response.LAT, response.LNG), //지도의 중심좌표.
                level: 3 //지도의 레벨(확대, 축소 정도)
		    };
		        var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
            }
        });
    }, [food.lat]);

    if(!load) {
        return (
            <StyledWrap>
                <StyledTitle>음식점을 조회 중 입니다...기다리세요...</StyledTitle>
            </StyledWrap>
        );
    }

    return (
     <>
        <StyledWrap>
            <StyledTitle>{food.title}</StyledTitle>
            <StyledMainImg src={food.img} />
            <StyledDescription>{food.description}</StyledDescription>
            <StyledOther>{food.address}</StyledOther>
            <StyledOther>{food.usageTime}</StyledOther>
            <StyledMap id="map"></StyledMap>
            <StyledMoreButton onClick={() => navi(-1)}>뒤로가기</StyledMoreButton>
        </StyledWrap>
        <div style={{ width:"50%", margin: "auto", height:"60px"}}>

            <form onSubmit={submitHandler}>
                <input type="text" placeholder=" 후 기 는 좋 게~♡ " onChange={contentHandler} value={content}/>
                <button>후기올려라!!</button>
            </form>
        </div>
        <>
            <Comments id={id} success={success} />
        </>
     </>
    );
};

export default Detail;