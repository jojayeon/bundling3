//얖 틀

import React from "react"

interface Div {
  anytext:string
}

const Divhtml:React.FC<Div> = ({anytext}) =>{
  return(
    <div>{anytext}</div>
  )
};

export default Divhtml