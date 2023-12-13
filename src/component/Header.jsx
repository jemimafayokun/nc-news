import { useContext } from "react";
import { UserContext } from "../context/UserContext";


const Header = () => {
const {user} = useContext(UserContext)

    return <div className="title"><h1>NewsBox</h1>
    <p className="login-statement">Logged in as: {user}</p>
    </div>
}

export default Header;
