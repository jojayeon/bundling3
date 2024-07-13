// Dom빼고 모으기 할 파일

// 첫 시작

import React from "react"
import Divhtml from "./div";

const ALLhtml:React.FC = () =>{
  return(
    <div>
      <Divhtml anytext = "aa"/>
      <Divhtml anytext = "aa"/>
      <div>
        <Divhtml anytext = "aa"/>
        <ul>
          <li>litext1-1</li>
          <li>litext1-2</li>
        </ul>
      </div>
      <Divhtml anytext = "aa"/>
      <Divhtml anytext = "aa"/>
      <div>
        <Divhtml anytext = "aa"/>
        <ul>
          <li>litext2-1</li>
          <li>litext2-2</li>
        </ul>
      </div>
    </div>
  )
};

export default ALLhtml;