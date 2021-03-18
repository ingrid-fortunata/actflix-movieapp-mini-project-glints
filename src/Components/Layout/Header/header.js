import React, { useState, useEffect } from "react";
import SignInModal from "../../Modal/SignInModal";
import { Link } from "react-router-dom";
import Hero from "../../Login/hero";
import "./header.css";
import actflix from "../../../assets/ACTFLIX.png";

const Header = (props) => {
  // const style = {
  //   color: "#fff",
  // };

  // const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInput = () => {
    setEmail("");
    setPassword("");
  };

  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);

  return (
    <div className={`header ${show && "header_black"}`}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div
          className="logo"
          onClick={() => {
            props.setInput("");
          }}
        >
          {/* <img src={movieLogo} alt="logo" className="movie-logo-header" /> */}
          {/* <h1 className="logo-name">ACTFLIX</h1> */}
          <img src={actflix} className="logo-new" alt="logo" />
        </div>
      </Link>
      <div>{props.searchBar}</div>
      <div className="sign-in">
        {localStorage.getItem("token") !== null ? (
          //user  -->logic nadya
          <Hero
            setisSignedIn={props.setisSignedIn}
            email={email}
            clearInput={clearInput}
          />
        ) : (
          <SignInModal
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            // emailError={emailError}
            // passwordError={passwordError}
            setisSignedIn={props.setisSignedIn}
          />
        )}
        {/* <Link to="/watch-list">
          <div>
            <h2>Watch List</h2>
          </div>
        </Link> */}
      </div>
    </div>
  );
};

export default Header;
