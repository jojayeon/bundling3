// ulil 틀

import React from "react"

interface ulli {
  litext: string[];
}

const Ulli:React.FC<ulli> = ({litext}) =>{
  return(
    <ul>
      <li>{litext[0]}</li>
      <li>{litext[1]}</li>
    </ul>
  )
}

export default Ulli;