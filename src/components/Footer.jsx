import React from "react";
import "../components/Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-content">
          <h3>KAYAKTA</h3>
          <p>Что вершит судьбу человечества в этом мире?</p>
          <ul className="socials">
            <li>
              <a target="_blank" href="https://github.com/SanzharKadyrkulov ">
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href='https://twitter.com/i/flow/login?input_flow_data=%7B"requested_variant":%22eyJ...'
              >
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://t.me/Jadurion">
                <i className="fa fa-telegram"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/jaddurion/">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
          <div className="regions">
            <p>
              <a
                target="_blank"
                href="https://ru.wikipedia.org/wiki/Иссык-Куль"
              >
                Issyk-Kul
              </a>
            </p>
            <p>
              <a
                target="_blank"
                href="https://ru.wikipedia.org/wiki/Ош_(город,_Киргизия)"
              >
                Osh
              </a>
            </p>
            <p>
              <a
                target="_blank"
                href="https://ru.wikipedia.org/wiki/Чуйская_область"
              >
                Chui
              </a>
            </p>
            <p>
              <a target="_blank" href="https://ru.wikipedia.org/wiki/Баткен">
                Batken
              </a>
            </p>
            <p>
              <a target="_blank" href="https://ru.wikipedia.org/wiki/Талас">
                Talas
              </a>
            </p>
            <p>
              <a
                target="_blank"
                href="https://en.wikipedia.org/wiki/Jalal-Abad"
              >
                Jalal-Abad
              </a>
            </p>
            <p>
              <a target="_blank" href="https://ru.wikipedia.org/wiki/Нарын">
                Naryn
              </a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Водички килограм. designed by <span>JS33</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
