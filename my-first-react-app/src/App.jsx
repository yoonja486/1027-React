import { Routes, Route } from "react-router-dom";
import "./App.css";
import Chapter01 from "./components/Chapter01/Chapter01";
import SelectBoard from "./components/Chapter01/SelectBoard";
import FirstComponent from "./components/modules/FirstComponent";
import Fusion from "./components/modules/Fusion";
import { WhatIsJSX, WhatIsReact } from "./components/modules/WhatIs";
import Chapter02 from "./components/Chapter02/Chapter02";
import Chapter03 from "./components/Chapter03/Chapter03";
import Chapter03_Input from "./components/Chapter03/Chapter03_Input";
import Foods from "./components/Busan/Foods";
import Nav from "./components/modules/Navi";
import Detail from "./components/Busan/Detail/Detail";


function App() {
   return (
    <>
      {/* 자바스크립트 코드를 작성할 수 있는 영역 */}
      {/* <Chapter01 />
      
      <Chapter03_Input /> */}

      {/* <Nav /> */}
      
      <Routes>
        <Route path="/" element={<h1>메인임</h1>} />
        <Route path="/fusion" element={<Fusion />} />
        <Route path="/01" element={<Chapter01 />} />
        <Route path="/02" element={<Chapter02 />} />
        <Route path="/03" element={<Chapter03 />} />
        <Route path="/input" element={<Chapter03_Input />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/foods/:id" element={<Detail />} />
        <Route path="/*" element={<h1>존재하지 않음</h1>} />
      </Routes>
      

    </>
  );
}

export default App;
