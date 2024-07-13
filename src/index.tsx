//dom 추가 , allhtml 받아서 reander할 파일
import React from "react";
import ReactDOM from "react-dom/client";
import ALLhtml from "./module/allhtml";


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<ALLhtml />)
//todo dom 조작 작성 