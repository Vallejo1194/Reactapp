
import { Container, Row, Col } from "react-bootstrap";
import Wimage from "../assets/img/WORLD.svg";

export const Banner = () => {
  const toRotate = ["Full-stack Developer"];
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h3 className="tagLine">Welcome to my React portafolio</h3>
            <h1>
              {"David Vallejo."}
              <h1 className="wrap">{toRotate}</h1>
            </h1>
            <p> Born in Monterrey, NL dedicated to International logistics and studying to become a fullstack developer.</p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={Wimage} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
