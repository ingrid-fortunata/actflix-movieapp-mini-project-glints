import React from "react";
import "./Footer.css";
// import {
//   FaFacebookSquare,
//   FaPinterestSquare,
//   FaInstagramSquare,
// } from "react-icons/fa";
import google_badge from "../../../assets/google_badge.png";
import appstore_badge from "../../../assets/appstore_badge.svg";
import facebookLogo from "../../../assets/facebookLogo.png";
import pinterestLogo from "../../../assets/pinterestLogo.png";
import instagramLogo from "../../../assets/instagramLogo.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-row">
        {/* column 1 */}
        <div className="footer-column">
          <ul>
            <div className="movie-logo-all">
              {/* <img src={movieLogo} alt="MilanTV_Logo" /> */}
              <p className="movie-logo-text">ACTFLIX</p>
            </div>

            <li className="movie-logo-info">
              Actflix is your one-stop spot for browsing newest movies and
              reviews. Explore the world of fun and suggest reviews for all
              fellow movie lovers. Lorem Ipsum has been the industry's standard
              printing and typesetting industry.
            </li>
          </ul>
        </div>
        {/* column 2 */}
        <div className="footer-column-links">
          <ul>
            <li>About us</li>
            <li>Blog</li>
            <li>Services</li>
            <li>Career</li>
            <li>Media Center</li>
          </ul>
        </div>
        {/* column 3 */}
        <div className="footer-column">
          <ul>
            <div className="download">
              <li>
                <b>Download</b>
              </li>
              <div>
                <a href="https://play.google.com/">
                  <img
                    src={google_badge}
                    alt="Google Play Logo"
                    style={{ width: "100px", height: "42px" }}
                  />
                </a>
                <a href="https://www.apple.com/app-store/">
                  <img
                    src={appstore_badge}
                    alt="App Store Logo"
                    style={{ width: "100px", height: "40px" }}
                  />
                </a>
              </div>
            </div>

            <div className="socialmedia">
              <li>
                <b>Social media</b>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <img
                    src={facebookLogo}
                    alt="FB"
                    style={{ width: "40px", height: "40px", margin: "0px 5px" }}
                  />
                  {/* <FaFacebookSquare color="blue" size="40px" margin="10px" /> */}
                </a>
                <a href="https://www.pinterest.com/">
                  <img
                    src={pinterestLogo}
                    alt="Pinterest"
                    style={{ width: "40px", height: "38px", margin: "0px 5px" }}
                  />
                  {/* <FaPinterestSquare color="red" size="40px" margin="10px" /> */}
                </a>
                <a href="https://www.instagram.com/">
                  <img
                    src={instagramLogo}
                    alt="Instagram"
                    style={{ width: "40px", height: "38px", margin: "0px 5px" }}
                  />
                  {/* <FaInstagramSquare color="orange" size="40px" margin="10px" /> */}
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <p> Copyright &copy; 2000-2020 ACTFLIX. All Rights Reserved</p>
      </div>
    </div>
  );
}
