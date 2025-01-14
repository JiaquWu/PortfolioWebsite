import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
//import avatar1 from "../../Assets/avatar1.jpg"
import avatar2 from "../../Assets/avatar2.jpg"
//import itch1 from "../../Assets/itch1.png"
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn,FaItchIo } from "react-icons/fa";

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
            {/* Back in early 2018, I realized that developing games was what I wanted to do most in the future. Then I started teaching myself C# and Unity development from scratch and have developed a lot of <a href="https://jiaqu-wu.itch.io/" className="purple">mini games</a> in numerous Game Jams from then. 
            During the last two years of my studies in Sweden, I worked as a game programmer on a few game projects and had the opportunity to intern as a game programmer at a studio that makes commercial games.  */}
            A few years ago, I came to realize that making games was what I enjoy the most spending my time on. Since then I started teaching myself C# and Unity development starting from zero and have developed a lot of <a href="https://jiaqu-wu.itch.io/" className="purple">mini games</a> in numerous Game Jams. 
            During my study in Sweden for the last two years, I worked as a game programmer on a few game projects and had the opportunity to intern as a game programmer at Blackdrop Interactive and worked on <a href="https://store.steampowered.com/app/1129310/Receiver_2/" className="purple">Receiver 2</a>
              <br />
              <br />I have a solid understanding of 
              <i>
                <b className="purple"> C# and Unity </b>
              </i>
              , and am comfortable using them to build game projects.
                I've also worked with <i><b className="purple"> Unreal and Blueprints </b></i> before, and I'm actively learning<i><b className="purple"> C++ </b> </i> at the moment. My next personal project will be to implement some interesting game systems with C++ in Unreal.
              <br />
              <br />
              I have a very strong passion for implementing interesting 
              <i>
                <b className="purple"> game systems</b>,
                <b className="purple"> game features</b> </i>and I seek to make the games I develop a very enjoyable and impressive experience for as many players as possible.
              I enjoy the process of <i><b className="purple"> problem solving</b></i> and am keen to learn new knowledge and techniques.
              
              <br />
              <br />
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
                  href="https://jiaqu-wu.itch.io"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaItchIo />
                </a>
              </li>
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
