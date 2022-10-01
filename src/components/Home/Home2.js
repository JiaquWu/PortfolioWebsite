import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
//import avatar1 from "../../Assets/avatar1.jpg"
import avatar2 from "../../Assets/avatar2.jpg"
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Four years ago in my second year of university, I realized that developing games was what I would most like to do in the future, so I taught myself C# and Unity development from scratch and developed a lot of <a href="https://jiaqu-wu.itch.io/" className="purple">mini games</a> in numerous Game Jams. 
            During the last two years of my studies in Sweden, I worked as game programmer on a few game projects and had the opportunity to intern as a game programmer at a studio that makes commercial games. 
            
              <br />
              <br />I'm very familiar with 
              <i>
                <b className="purple"> C# and Unity </b>,
                and I've worked with <b className="purple"> Unreal and blueprints </b> before.
              </i>
              <br />
              <br />
              I am passionate about implementing interesting 
              <i>
                <b className="purple"> game systems </b>,
                <b className="purple"> game features</b> and I seek to make the games I develop a very enjoyable and impressive experience for as many players as possible.
              </i>
              <br />
              <br />
              In the future, I'm eager to work on more interesting game projects.
              {/* //<b className="purple"></b> a
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={avatar2} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/JiaquWu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jiaqu-wu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
