// Dom빼고 모으기 할 파일

// 첫 시작

import React from "react"

const ALLhtml:React.FC = () =>{
  return(
    <div>
      <div>maintitle1</div>
      <div>text1</div>
      <div>
        <div>subtitle1</div>
        <ul>
          <li>litext1-1</li>
          <li>litext1-2</li>
        </ul>
      </div>
      <div>maintitle2</div>
      <div>text2</div>
      <div>
        <div>subtitle2</div>
        <ul>
          <li>litext2-1</li>
          <li>litext2-2</li>
        </ul>
      </div>
    </div>
  )
};