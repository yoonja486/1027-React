import { Routes, Route } from "react-router-dom";
import "./App.css";
import Chapter01 from "./components/Chapter01/Chapter01";
import SelectBoard from "./components/Chapter01/SelectBoard";
import Header from "./components/Common/Header/Header";
import FirstComponent from "./components/modules/FirstComponent";
import Fusion from "./components/modules/Fusion";
import { WhatIsJSX, WhatIsReact } from "./components/modules/WhatIs";
import Chapter02 from "./components/Chapter02/Chapter02";


function App() {
   return (
    <>
      {/* 자바스크립트 코드를 작성할 수 있는 영역 */}
      {false && <Fusion /> && <Chapter01 />}
      <Header />
      <SelectBoard />

      <Routes>
        <Route path="/" element={<h1>메인임</h1>} />
        <Route path="/fusion" element={<Fusion />} />
        <Route path="/01" element={<Chapter01 />} />
        <Route path="/02" element={<Chapter02 />} />
        <Route path="/*" element={<h1>존재하지 않음</h1>} />

      </Routes>
      

    </>
  );
}

export default App
