import "./topbar.css";
import { Person, Chat, Notifications, Home } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Searchbar from "../searchbar/Searchbar";

export default function Topbar() {
  const { user, dispatch } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const logout = () => {
    console.log("logging out user", localStorage.getItem("user"))
    localStorage.removeItem("user")
    dispatch({ type: "LOGOUT" })
    console.log(localStorage.getItem("user"))
  }

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">SociaLite</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <Searchbar />
      </div>
      <div className="topbarRight">
        <div >
          <Link to="/" className="homeIcon">
            <Home />
          </Link>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <div className="logout" onClick={logout}>
          <span>Logout</span>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
}
