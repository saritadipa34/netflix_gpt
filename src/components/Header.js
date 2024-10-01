import { logo } from "../utils/constant";
const Header=()=>{
    return(
        <div className="absolute bg-gradient-to-b from-black z-10 pl-24">
            <img className="w-44" src={logo} alt="logo"/>
        </div>
    )
}
export default Header;