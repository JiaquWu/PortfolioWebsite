/*eslint-disable unicode-bom */
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

export default function Home2() {
    return (
        <Container fluid className="home-about-section" id="about" style={{ paddingTop: "0rem" }}>
            <Container>
                <Row className="align-items-baseline">
                    <Col md={8} className="home-about-description">

                        {/* —— About Me —— */}
                        <h2 className="section-heading">About Me</h2>
                        <p className="locomoto-intro-desc white-text">
                            Back in <strong>2018</strong>, I realized that making games was my <strong>true calling</strong>. At that time, I started teaching myself <b className="purple">C#</b> and <b className="purple">Unity</b>, participated in numerous Game Jams, and created a wide range of <a href="https://jiaqu-wu.itch.io/" className="purple bold-link"> mini-games</a>.
                        </p>
                        <p className="locomoto-intro-desc white-text">
                            In <strong>2020</strong>, I moved to Sweden to further pursue this passion in a more professional way. During my two years of studies in Sweden, I contributed to several game projects as a game programmer and had the opportunity to do an internship at <a href="https://www.blackdropinteractive.com/" className="purple bold-link"> Blackdrop Interactive</a>, where I made contributions to <a href="https://store.steampowered.com/app/1129310/Receiver_2/" className="purple bold-link">Receiver 2</a>. After completing my studies, I joined <a href="https://greentiledigital.com/" className="purple bold-link"> Green Tile Digital</a> and spent more than two years as a <b className="purple">Gameplay Programmer</b> on <a href="/#/Locomoto" className="purple bold-link">Locomoto</a>
                             , and I have been consistently contributing to various core gameplay systems and features in the game.
                        </p>

                        {/* —— Skills & Expertise —— */}
                        <h2 className="section-heading">Skills &amp; Expertise</h2>
                        <p className="locomoto-intro-desc white-text">
                            Throughout the years, I've continuously strengthened my understanding and proficiency with <b className="purple">C# and Unity</b>, and become more and more comfortable using them to implement various gameplay features, game systems, and custom tools. While there's always more to learn, I'm confident in my ability to deliver clean, stable, and extensible code using object-oriented programming principles.
                        </p>
                        <p className="locomoto-intro-desc white-text">
                            Additionally, I have experience with <b className="purple">Unreal Engine's Blueprints</b> and am actively practicing my skills in <b className="purple">C++</b> making personal projects. I'm also comfortable with version control systems like <b className="purple">Git</b>, <b className="purple">Plastic</b>, and <b className="purple">Perforce</b>.
                        </p>
                        <p className="locomoto-intro-desc white-text">
                            My passion lies in implementing engaging and creative gameplay mechanics and polished game features, and I really enjoy the process of continously iterating and refining them. Creating something new and fun excites me a lot, and I'm always pursuing to deliver an enjoyable and memorable player experience. Apart from that, I'm also passionate about developing custom tools to support my team and rapidly resolve technical issues in day-to-day development.
                        </p>
                        <p className="locomoto-intro-desc white-text">
                            I'm always down to diving deeply into complex game systems and utilizing various tools and plugins to solve technical issues and challenges, and pushing my skills further in the world of game development step by step.
                        </p>
                    </Col>

                    <Col md={4} className="myAvtar align-self-start" style={{ marginTop: "-2.7rem" }}>
                        <Tilt>
                            <img src={avatar2} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>

                {/* …social links 等保持不变… */}
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        {/* <p>
              Feel free to <span className="purple">connect </span>with me
            </p> */}
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
