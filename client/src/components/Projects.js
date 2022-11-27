import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg4 from "../assets/img/World.jpeg"


import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "HTML",
      description: "*",
      imgUrl: projImg4,

    },
    {
      title: "CSS",
      description: "*",
      imgUrl: projImg4,

    },
    {
      title: "JS",
      description: "*",
      imgUrl: projImg4,
    },
    {
      title: "MYSQL",
      description: "MYSQL",
      imgUrl: projImg4,
    },
    {
      title: "MONGO",
      description: "*",
      imgUrl: projImg4,
    },
    {
      title: "REACT",
      description: "*",
      imgUrl: projImg4,
    },
  ];


  
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-8 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Complete Set</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
