
import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/Logo-Icon.png";
import LinkedinI from "../assets/img/nav-icon1.svg";
import TwitterI from "../assets/img/twitterI.png"
import GithubI from "../assets/img/GithubI.png"


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
     
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/david-adri%C3%A1n-vallejo-valdez-b766b9128/" target="_blank" rel="noreferrer">
                <img src={LinkedinI} alt="Icon" />
              </a>
              
            </div>

            <div className="social-icon">
              <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
                <img src={TwitterI} alt="Icon" />
              </a>
              
            </div>

            <div className="social-icon">
              <a href="https://github.com/Vallejo1194" target="_blank" rel="noreferrer">
                <img src={GithubI} alt="Icon" />
              </a>
              
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};