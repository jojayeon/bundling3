import react from "react"

interface title {
  divtext: string;
}

const Title:React.FC<title> = ({divtext}) =>{
  return (
    <div>{divtext}</div>
  )
}

export default Title