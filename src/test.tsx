import React from "react";
import ReactDOM from "react-dom/client";
import A from "./title"
import title123 from "../static/testtitle"

import style1 from "./teststyle"


const Test:React.FC = () => {
  return (
    <div>
      <A divtext= {title123}/>
      <div style={style1}> title2</div>
      <div>
        <div>text</div>
        <ul>
          <li>text1</li>
          <li>text2</li>
        </ul>
      </div>
    </div>
  );
}

export default Test


//1.  여기서 title, title2, text 같게 만들어서 글만 가져오는 것에 글을 다르게만 해주면 되지않을까?
//2.  아래 부분을 따로만들어서 
{/* <ul>
  <li>text1</li>
  <li>text2</li>
</ul> */}

{/* <div>
  <title(함수) 매개변수= {글 있는 변수} />
  <title(함수) 매개변수= {글 있는 변수} />
  <div>
    <title(함수) 매개변수= {글 있는 변수} />
    <luli 매개변수 = {글 모은 배열 변수} />
  </div>
</div> */}
