// Dom빼고 모으기 할 파일

// 첫 시작

import React from "react"
import Divhtml from "./div";
import Ulli from "./ulli"


// text
import maintitle1 from "../../static/miantitle1"
import maintitle2 from "../../static/miantitle2"
import ultext from "../../static/ultext"
import text1 from "../../static/text1"
import text2 from "../../static/text2"
import litext1 from "../../static/litext1-1"
import litext2 from "../../static/litext2-1"



const ALLhtml:React.FC = () =>{
  return(
    <div>
      <Divhtml anytext = {maintitle1}/>
      <Divhtml anytext = {text1}/>
      <div>
        <Divhtml anytext = {ultext}/>
        <Ulli litext = {litext1}/>
      </div>
      <Divhtml anytext =  {maintitle2}/>
      <Divhtml anytext = {text2}/>
      <div id="aa">
        <Divhtml anytext = {ultext}/>
        <Ulli litext = {litext2}/>
      </div>
    </div>
  )
};

export default ALLhtml;