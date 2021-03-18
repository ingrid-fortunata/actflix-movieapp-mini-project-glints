import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";
import blank_profile from "../../assets/blank_picture.png";
import auth_service from "../../services/auth_service";

const Hero = ({ setisSignedIn, email, clearInput }) => {
  // const [showMenu, setShowMenu] = useState(false);
  const handle_SignOut = () => {
    auth_service.logout();
    setisSignedIn(false);
    clearInput();
  };
  return (
    <div>
      {/* <button onClick={() => setShowMenu(!showMenu)}>Hello!</button>
      {showMenu ? (
      <div className="hero-link">
        <ul>
          <li>Profile</li>
          <li>Setting</li>
          <Link
            to="/watch-list"
            style={{ textDecoration: "none", color: "white" }}
          >
            <li>Watch List</li>
          </Link>
          <li onClick={handleSignOut} style={{ cursor: "pointer" }}>
            Log Out
          </li>
        </ul>
      </div> */}
      {/* ) : null} */}
      {/* <button onClick={handleSignOut}>Log Out</button> */}

      <li class="dropdown">
        <img src={blank_profile} className="img" alt="profile" />
        {/* <h2 className="dropbtn">Hello!</h2> */}
        <div class="dropdown-content">
          <p>Profile</p>
          <Link to="/watch-list" style={{ textDecoration: "none" }}>
            <p style={{ color: "black" }}>Watch List</p>
          </Link>
          <p>Setting</p>
          {email === "superadmin@gmail.com" ? <p>Add Movie</p> : null}
          <p
            onClick={() => {
              handle_SignOut();
            }}
          >
            Log Out
          </p>
        </div>
      </li>
    </div>
  );
};

export default Hero;
