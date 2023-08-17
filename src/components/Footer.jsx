import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="left">
          <a href="https://github.com/bekzhan077/final-hackaton">
            <button className="btn-logo-footer">
              <img
                className="logo-footer-svg"
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="github"
              />
            </button>
          </a>
          <a href="https://www.youtube.com/">
            <button className="btn-logo-footer">
              <img
                className="logo-footer-svg"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
                alt="youtube"
              />
            </button>
          </a>
          <a href="https://www.instagram.com/">
            <button className="btn-logo-footer">
              <img
                className="logo-footer-svg"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
                alt="insta"
              />
            </button>
          </a>
          <a href="https://twitter.com/home">
            <button className="btn-logo-footer">
              <img
                className="logo-footer-svg"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553"
                alt="twiter"
              />
            </button>
          </a>
        </div>
        <div className="nav-footer">
          <div className="google">
            <a style={{ textDecoration: "none" }} href="https://www.google.ru/">
              <button className="button-google">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
                  alt=""
                />
                Continue with Google
              </button>
            </a>
          </div>
          <div className="search">
            <h1>How was our site useful to you? You can leave your feedback</h1>
            <input placeholder="Message..." type="text" />
            <button className="button-inp-footer" type="submit">
              Message
            </button>
          </div>
        </div>
        <div className="right-footer">
          <button className="footer-button-right">Chui</button>
          <button className="footer-button-right">Osh</button>
          <button className="footer-button-right">Issyk-Kyl</button>
          <button className="footer-button-right">Jalal-Abad</button>
          <button className="footer-button-right">Batken</button>
          <button className="footer-button-right">Talas</button>
          <button className="footer-button-right">Naryn</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
