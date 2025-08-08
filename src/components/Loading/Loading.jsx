import { ClimbingBoxLoader } from "react-spinners"
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <ClimbingBoxLoader color="#5dade2" size={30}/>
    </div>
  )
}

export default Loading
