import Header from "./Header";
import { bgUrl } from "../utils/constant";
const Login=()=>{
    return(
        <div>
            <div className="header ">
            <Header />
            </div>
            <img className="relative" src={bgUrl} alt="bgimage"/>
        </div>
    )
}
export default Login;