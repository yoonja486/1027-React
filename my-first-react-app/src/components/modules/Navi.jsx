 import { NavLink, useNavigate } from "react-router-dom";
 import { StyledredP } from "../Chapter01/Chapter01.styles";
 
 const Nav = () => {
     const navi = useNavigate();

     return (
         <StyledredP>
         <NavLink onClick={() => navi("/fusion")}>home</NavLink>
         <NavLink onClick={() => navi("/fusion")}>fusion</NavLink>
         <NavLink onClick={() => navi("/01")}>01</NavLink>
         <NavLink onClick={() => navi("/02")}>02</NavLink>
         <NavLink onClick={() => navi("/03")}>03</NavLink>
         <NavLink onClick={() => navi("/input")}>input</NavLink>
         <NavLink onClick={() => navi("/foods")}>부산</NavLink>
         </StyledredP>

     );
};

export default Nav;