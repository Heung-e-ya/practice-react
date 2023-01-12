import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

//브라우저에 컴포넌트를 보여줌
ReactDOM.render(
  //param1 - 화면에 보여줘야되는 렌더링할 컴포넌트
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,

  //param2 - 컴포넌트를 어디다 그려줄건지. index.html 파일에서 ID가 root인 엘리먼트를 찾아 뿌려줌
  document.getElementById("root")
);
