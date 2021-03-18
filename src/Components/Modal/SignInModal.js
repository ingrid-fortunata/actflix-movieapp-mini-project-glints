import React, { useState } from "react";
import Modal from "react-modal";
import "./Modal.css";
import auth_service from "../../services/auth_service";
// import movieLogo from "../../assets/movieLogo.png";
import ACTFLIX from "../../assets/ACTFLIX.png";

export default function SignInModal(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [isSignUp, setIsSignUp] = useState(true);

  const [message, setMessage] = useState("");
  const [successful, setSuccessful] = useState(false);

  let err_message = "";
  const {
    email,
    setEmail,
    password,
    setPassword,
    hasAccount,
    setHasAccount,
    setisSignedIn,
  } = props;

  const handle_signUp = (param1, param2, param3, param4) => {
    auth_service.register(param1, param2, param3, param4).then(
      (response) => {
        setMessage(response.message);
        setSuccessful(true);
      },
      (error) => {
        const resMessage =
          (error.response && error.response && error.response.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
        setSuccessful(false);
      }
    );
    console.log(message);
  };

  const handle_signIn = (param1, param2) => {
    auth_service.login(param1, param2).then(
      (response) => {
        setMessage(response.message);
        setSuccessful(true);
        setisSignedIn(true);
        setModalIsOpen(false);
      },
      (error) => {
        const resMessage =
          (error.response && error.response && error.response.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
        setSuccessful(false);
      }
    );
  };
  return (
    <div className="signin-modal">
      <h2 onClick={() => setModalIsOpen(true)}>Sign In</h2>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <section className="modal-container">
          <div className="logo">
            <img src={ACTFLIX} alt="logo" className="movie-logo-new" />
            {/* <h1 className="logo-name">ATV</h1> */}
          </div>
          <div className="loginContainer">
            <div className="content-item">
              <label className="styleLabel">E-mail</label>
              <input
                type="text"
                autoFocus
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="styleInput"
              />
            </div>

            <div className="content-item">
              <label className="styleLabel">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="styleInput"
              />
            </div>

            <div className="btnContainer">
              {hasAccount ? (
                <>
                  <div className="content-item">
                    <button
                      className="styleButtonSignup"
                      onClick={() => {
                        handle_signIn(email, password);
                        //handleLogin();
                      }}
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="alreadyhave">
                    <p>Don't have an account? </p>
                    <span
                      onClick={() => {
                        setHasAccount(!hasAccount);
                      }}
                    >
                      Sign Up
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="content-item">
                    <button
                      className="styleButtonSignup"
                      onClick={() => {
                        handle_signUp(email, "testing", email, password);
                      }}
                    >
                      Sign Up
                    </button>
                    {message}
                  </div>
                  <div className="alreadyhave">
                    <p>Have an account? </p>
                    <span onClick={() => setHasAccount(!hasAccount)}>
                      Sign In
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </Modal>
    </div>
  );
}
